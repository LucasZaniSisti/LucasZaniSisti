from datetime import datetime, timedelta
import os

# padrão simples (você depois pode virar Darth Vader / logo Star Wars)
pattern = [
    "00100",
    "01110",
    "11111",
    "10101",
    "00100"
]

start_date = datetime(2024, 1, 1)

for y, row in enumerate(pattern):
    for x, pixel in enumerate(row):
        if pixel == "1":
            day = start_date + timedelta(days=(y * 7 + x))
            date_str = day.strftime("%Y-%m-%d")

            file_name = f"commits/{date_str}.txt"
            os.makedirs("commits", exist_ok=True)

            with open(file_name, "w") as f:
                f.write("STAR WARS COMMIT ART")

            os.system(f'git add {file_name}')
            os.system(f'git commit --date="{date_str}T12:00:00" -m "force commit"')
