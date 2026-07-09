import pandas as pd
import json
import os

# 원본 엑셀 파일이 있는 폴더
SOURCE_FOLDER = "data"

# JSON 저장 폴더
OUTPUT_FOLDER = "json"

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

files = [
    "kindergarten.xlsx",
    "elementary.xlsx",
    "middle.xlsx",
    "high.xlsx"
]

for file in files:

    path = os.path.join(SOURCE_FOLDER, file)

    if not os.path.exists(path):
        print(f"❌ 파일 없음 : {file}")
        continue

    print(f"\n📖 읽는 중 : {file}")

    # 엑셀 읽기
    df = pd.read_excel(path)

    # 열 이름 앞뒤 공백 제거
    df.columns = df.columns.str.strip()

    # 빈칸을 빈 문자열로 변경
    df = df.fillna("")

    # 날짜(datetime)는 문자열로 변경
    for col in df.columns:
        df[col] = df[col].apply(
            lambda x: x.strftime("%Y-%m-%d") if hasattr(x, "strftime") else x
        )

    data = df.to_dict(orient="records")

    json_name = file.replace(".xlsx", ".json")

    output_path = os.path.join(OUTPUT_FOLDER, json_name)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

    print(f"✅ 저장 완료 : {json_name} ({len(data)}개 학교)")

print("\n🎉 모든 변환이 완료되었습니다.")
