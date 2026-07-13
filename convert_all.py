# ======================================================
# 시흥 특수학급 지도 - 엑셀(xlsx/xlsm) 일괄 변환 스크립트
#
# data 폴더 안에 있는 모든 xlsx / xlsm 파일을 찾아서
# 같은 이름의 json 파일로 json 폴더에 자동 생성합니다.
#
# 예) data/elementary.xlsx -> json/elementary.json
#
# 사용법 : 이 파일을 data, json 폴더와 같은 위치에 두고
#         convert.bat 을 더블클릭하면 됩니다.
# ======================================================

import os
import glob
import json
import pandas as pd


DATA_DIR = "data"
JSON_DIR = "json"

# 숫자로 유지해야 하는 컬럼 (위도/경도)
NUMBER_COLUMNS = ["위도", "경도"]


def clean_value(col, value):
    """엑셀 셀 값을 json에 넣기 좋은 형태로 정리합니다."""

    # 빈 칸(NaN) 처리
    if pd.isna(value):

        return "" if col not in NUMBER_COLUMNS else None

    # 위도/경도는 숫자로 유지
    if col in NUMBER_COLUMNS:

        return float(value)

    # 46113 같은 숫자가 섞여 들어온 경우 -> 문자열로 자연스럽게 변환
    if isinstance(value, float) and value.is_integer():

        return str(int(value))

    return str(value).strip()


def convert_file(excel_path):

    name = os.path.splitext(os.path.basename(excel_path))[0]

    json_path = os.path.join(JSON_DIR, f"{name}.json")

    df = pd.read_excel(excel_path)

    records = []

    skipped = 0

    for _, row in df.iterrows():

        record = {}

        for col in df.columns:

            record[col] = clean_value(col, row[col])

        # 위도/경도가 없는 행(빈 줄 등)은 지도에 표시할 수 없으므로 제외
        if record.get("위도") is None or record.get("경도") is None:

            skipped += 1

            continue

        records.append(record)

    with open(json_path, "w", encoding="utf-8") as f:

        json.dump(records, f, ensure_ascii=False, indent=4)

    msg = f"✅ {os.path.basename(excel_path)} -> {name}.json  ({len(records)}개 학교"

    if skipped:

        msg += f", 위도/경도 없어 제외된 행 {skipped}개"

    msg += ")"

    print(msg)


def main():

    os.makedirs(JSON_DIR, exist_ok=True)

    files = (

        glob.glob(os.path.join(DATA_DIR, "*.xlsx")) +
        glob.glob(os.path.join(DATA_DIR, "*.xlsm"))

    )

    # 엑셀 임시파일(~$로 시작)은 제외
    files = [f for f in files if not os.path.basename(f).startswith("~$")]

    if not files:

        print(f"⚠ '{DATA_DIR}' 폴더에 xlsx/xlsm 파일이 없습니다.")

        return

    print(f"📂 총 {len(files)}개 엑셀 파일을 변환합니다...\n")

    for f in files:

        try:

            convert_file(f)

        except Exception as e:

            print(f"❌ {os.path.basename(f)} 변환 실패 : {e}")

    print("\n🎉 변환 완료! json 폴더를 확인해 주세요.")


if __name__ == "__main__":

    main()
