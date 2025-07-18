:root {
  --primary: #124559;
  --secondary: #598392;
  --accent: #aec3b0;
  --bg: #f7f7f7;
  --white: #fff;
  --card-shadow: 0 4px 32px rgba(90,131,146,0.11);
}

body {
  margin: 0;
  font-family: 'Roboto', Arial, sans-serif;
  background: var(--bg);
  color: #212529;
  line-height: 1.7;
  scroll-behavior: smooth;
}

header {
  background: linear-gradient(120deg, var(--primary) 70%, var(--secondary) 100%);
  color: var(--white);
  padding: 60px 0 40px 0;
  text-align: center;
  border-radius: 0 0 20px 20px;
  transition: opacity .25s, box-shadow .25s;
}

header h1 {
  margin: 0 0 10px;
  font-size: 2.5em;
  letter-spacing: -1px;
  font-weight: 700;
}
header p { margin: 0 0 24px; font-size: 1.22em; }
header .cta {
  background: var(--accent);
  color: var(--primary);
  border: none;
  border-radius: 30px;
  padding: 13px 36px;
  font-size: 1.16em;
  cursor: pointer;
  transition: background .18s, box-shadow .18s, transform .2s;
  font-weight: bold;
  box-shadow: 0 3px 12px rgba(174,195,176,0.12);
}
header .cta:hover { background: #e3ece3; }

section {
  max-width: 950px;
  margin: 44px auto;
  background: var(--white);
  box-shadow: var(--card-shadow);
  border-radius: 18px;
  padding: 40px 32px 36px 32px;
  margin-bottom: 38px;
  transition: box-shadow .18s;
}
section:hover {
  box-shadow: 0 6px 36px rgba(18,69,89,0.13);
}

h2 {
  color: var(--primary);
  margin-top: 0;
  font-size: 1.5em;
  border-left: 6px solid var(--secondary);
  padding-left: 12px;
}
h3 { margin-bottom: 4px; font-weight: 600; }
ul { margin-top: 0; }
.team-grid {
  display: flex; flex-wrap: wrap; gap: 24px; margin-bottom: 10px;
}
.team-card {
  background: var(--bg);
  border-radius: 14px;
  flex: 1 1 200px;
  min-width: 150px;
  text-align: center;
  padding: 17px 10px;
  box-shadow: 0 3px 16px rgba(90,131,146,0.07);
  transition: box-shadow .18s, transform .16s;
  font-weight: 500;
}
.team-card:hover {
  box-shadow: 0 6px 24px rgba(90,131,146,0.17);
  transform: translateY(-4px) scale(1.03);
}

.img-row {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 22px 0;
}
.img-row img {
  border-radius: 13px;
  box-shadow: 0 2px 16px rgba(18,69,89,0.10);
  width: 210px; max-width: 92vw;
  background: #e3e3e3;
  transition: box-shadow .18s, transform .16s;
}
.img-row img:hover {
  box-shadow: 0 7px 32px rgba(90,131,146,0.13);
  transform: scale(1.04);
}

.references {
  font-size: .97em;
  color: #474747;
  line-height: 1.4;
}

footer {
  background: var(--secondary);
  color: var(--white);
  text-align: center;
  font-size: 1em;
  padding: 18px 0 10px 0;
  margin-top: 48px;
  border-radius: 0 0 18px 18px;
  letter-spacing: .03em;
}
@media (max-width: 650px) {
  section { padding: 18px 2vw; }
  header { padding: 36px 0 16px 0; }
  .img-row img { width: 120px; }
  .team-grid { flex-direction: column; }
}
