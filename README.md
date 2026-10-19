# 🏦 FinStat Risk™: Credit Risk & Default Prediction for Indonesian Digital Lending
> **Strategi Mitigasi Rasio Kredit Macet (TWP90) Sesuai Regulasi Otoritas Jasa Keuangan (OJK)**

[![Author](https://img.shields.io/badge/Analyst-M.%20Naufal%20Zamani-blue?style=for-the-badge)](https://www.instagram.com/rebatur_data/?__pwa=1#)
[![Instagram](https://img.shields.io/badge/@rebatur__data-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/rebatur_data/?__pwa=1#)
[![Regulation](https://img.shields.io/badge/Compliance-OJK%20TWP90%20%26%20Basel%20II-red?style=for-the-badge)]()
[![Model](https://img.shields.io/badge/Algorithm-Binomial%20Logit%20(FICO%20Scorecard)-indigo?style=for-the-badge)]()

---

## 📌 1. Latar Belakang & Masalah Bisnis (OJK Context)
Di industri FinTech P2P Lending dan Bank Digital Indonesia, Otoritas Jasa Keuangan (OJK) menggunakan indikator **TWP90 (Tingkat Wanprestasi 90 Hari)** sebagai tolok ukur utama risiko kredit macet dengan batas aman **< 5.0%**.
* **Dilema Bisnis:** 
  * Jika pinjaman disetujui terlalu longgar $\rightarrow$ TWP90 melonjak, risiko sanksi OJK, dan investor/lender kabur.
  * Jika disetujui terlalu ketat $\rightarrow$ pendapatan bunga turun (*opportunity loss*).
* **Solusi FinStat Risk™:** Membangun model pemeringkat kredit (*Credit Scorecard*) berbasis **Regresi Logistik Multivariat** pada **31.834 debitur riil** untuk memprediksi probabilitas gagal bayar (*Probability of Default*) dan menentukan ambang batas persetujuan (*cut-off score*) yang optimal.

---

## 🔬 2. Metodologi Statistika & Hasil Evaluasi Model

### A. Seleksi Fitur: Weight of Evidence (WoE) & Information Value (IV)
Penyaringan variabel dilakukan secara objektif menggunakan nilai *Information Value* (IV):
* **Prediktor Sangat Kuat ($IV > 0.3$):** 
  * Rasio Cicilan terhadap Pendapatan / DSR ($IV = 0.7062$)
  * Suku Bunga Tahunan ($IV = 0.5956$)
  * Pendapatan Bulanan ($IV = 0.4537$)
  * Status Tempat Tinggal ($IV = 0.3727$)
* **Prinsip Parsimoni Statistika:** Variabel *Usia* ($IV = 0.0057$) dan *Lama Riwayat Kredit* ($IV = 0.0035$) dieliminasi karena tidak prediktif ($IV < 0.02$).

### B. Hasil Uji Kelayakan Model (Goodness-of-Fit & Discriminatory Power)
* **Akurasi Model (AUC - ROC): `0.8449`** $\rightarrow$ Model memiliki kemampuan pemisah 84.5% membedakan debitur macet vs lancar.
* **Separasi Risiko (KS - Statistic): `53.16%`** $\rightarrow$ Memenuhi standar industri perbankan Tier-1 ($30\% - 60\%$).
* **Goodness-of-Fit (McFadden Pseudo $R^2$): `0.3047`** $\rightarrow$ Kategori *Excellent Fit* ($0.20 - 0.40$).
* **Uji Multikolinearitas (VIF): `Max VIF = 2.47`** $\rightarrow$ Jauh di bawah batas kritis 5.0, membuktikan estimator OLS/Logit stabil dan tidak bias.

### C. Formula Translasi Skor FICO (Skala 300 - 850)
Translasi matematis *log-odds* menggunakan metode *Points to Double Odds* (PDO = 20, Base Score = 600 pada Odds 20:1):
$$\text{Score} = 513.5 + 28.85 \times \ln\left(\frac{1 - p}{p}\right)$$

---

## 💼 3. Strategi Keputusan Bisnis & Dampak Finansial

Berdasarkan *cut-off* skor kredit, portofolio diklasifikasikan ke dalam 3 kebijakan:
1. **Auto-Approved (Skor $\ge 650$ | 4.2% Portofolio):** Debitur prima, pencairan instan dengan penawaran suku bunga terendah (0.8% - 1.0% / bulan).
2. **Manual Review (Skor 580 - 649 | 39.4% Portofolio):** Risiko moderat, analis kredit wajib memverifikasi mutasi rekening koran dan pembatasan plafon maksimal 50%.
3. **Auto-Reject (Skor $< 580$ | 56.4% Portofolio):** Penolakan otomatis sistem terhadap segmen *subprime* berisiko tinggi.

> 💰 **Dampak Finansial Nyata:** 
> Penolakan otomatis pada 56.4% kelompok berisiko tinggi berhasil **menyelamatkan kas platform FinTech dari potensi kerugian gagal bayar sebesar Rp 48,2 Miliar**!

---

## 🖥️ 4. Fitur Aplikasi Web Enterprise

1. **Executive Risk Dashboard:** 5 Kartu KPI makro, Peta Sebaran Risiko GIS Indonesia berbasis Leaflet.js, dan Leaderboard Ranking 9 Koridor Wilayah.
2. **Credit Underwriter Workspace:** Alat evaluasi debitur baru secara *real-time* yang otomatis menerbitkan Sertifikat Kelaikan 4 Kuadran (Skor FICO, Peluang Default, Beban DSR, dan Suku Bunga Anjuran).
3. **Portfolio Database & Audit Trail:** Log audit 30+ sampel terverifikasi dengan fitur pencarian instan dan navigasi halaman (*pagination*).
4. **Model Governance:** Dokumentasi arsitektur data dan kamus arti bisnis statistika.

---

## 👨‍💻 Author & Lead Analyst
* **Lead Risk Analyst:** M. Naufal Zamani
* **Instagram Portofolio:** [@rebatur_data](https://www.instagram.com/rebatur_data/?__pwa=1#)
* **Kepatuhan:** Mengacu pada Regulasi OJK TWP90 & Basel II Risk Accord.
