# Lead-magnet PDF generator

Regenerates the free guide `public/downloads/25-hidden-places-in-italy.pdf`.

## Usage

```bash
pip install weasyprint
cd scripts
python3 build_pdf.py
```

- Edit the destinations in `places.py` (must total 25).
- `build_pdf.py` renders a branded A4 PDF using the Wanderlust logo and blue theme.
- Output is written to `public/downloads/`, served at `/downloads/25-hidden-places-in-italy.pdf`.
