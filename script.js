// ====================================================
// 1. DATA AUDIT DATABASE LENGKAP (30+ NASABAH RIIL)
// ====================================================
const systemDatabase = [
    { id: "IDN-LN000001", gaji: 6500000, plafon: 8000000, dsr: 0.10, score: 672, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000002", gaji: 12000000, plafon: 15000000, dsr: 0.10, score: 635, decision: "Manual Review", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000003", gaji: 12000000, plafon: 82500000, dsr: 0.57, score: 396, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000004", gaji: 81875000, plafon: 525000000, dsr: 0.53, score: 449, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000005", gaji: 68000000, plafon: 525000000, dsr: 0.55, score: 447, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000006", gaji: 12375000, plafon: 37500000, dsr: 0.25, score: 621, decision: "Manual Review", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000007", gaji: 15000000, plafon: 20000000, dsr: 0.11, score: 685, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000008", gaji: 9500000, plafon: 45000000, dsr: 0.39, score: 420, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000009", gaji: 18000000, plafon: 25000000, dsr: 0.12, score: 710, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000010", gaji: 7000000, plafon: 30000000, dsr: 0.36, score: 455, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000011", gaji: 14000000, plafon: 35000000, dsr: 0.21, score: 615, decision: "Manual Review", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000012", gaji: 22000000, plafon: 30000000, dsr: 0.11, score: 725, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000013", gaji: 5500000, plafon: 40000000, dsr: 0.61, score: 375, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000014", gaji: 11000000, plafon: 25000000, dsr: 0.19, score: 630, decision: "Manual Review", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000015", gaji: 16500000, plafon: 22000000, dsr: 0.11, score: 690, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000016", gaji: 4800000, plafon: 32000000, dsr: 0.56, score: 388, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000017", gaji: 13500000, plafon: 38000000, dsr: 0.23, score: 618, decision: "Manual Review", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000018", gaji: 25000000, plafon: 28000000, dsr: 0.09, score: 755, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000019", gaji: 8000000, plafon: 48000000, dsr: 0.50, score: 410, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000020", gaji: 10500000, plafon: 28000000, dsr: 0.22, score: 625, decision: "Manual Review", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000021", gaji: 19000000, plafon: 24000000, dsr: 0.11, score: 715, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000022", gaji: 6200000, plafon: 35000000, dsr: 0.47, score: 430, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000023", gaji: 12800000, plafon: 36000000, dsr: 0.23, score: 619, decision: "Manual Review", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000024", gaji: 32000000, plafon: 40000000, dsr: 0.10, score: 760, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000025", gaji: 7500000, plafon: 42000000, dsr: 0.46, score: 435, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000026", gaji: 15500000, plafon: 25000000, dsr: 0.13, score: 680, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000027", gaji: 5200000, plafon: 38000000, dsr: 0.60, score: 380, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" },
    { id: "IDN-LN000028", gaji: 11500000, plafon: 32000000, dsr: 0.23, score: 622, decision: "Manual Review", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000029", gaji: 28000000, plafon: 35000000, dsr: 0.10, score: 745, decision: "Auto-Approved", actual: 0, status: "Tepat (Lancar)" },
    { id: "IDN-LN000030", gaji: 8800000, plafon: 50000000, dsr: 0.47, score: 425, decision: "Auto-Reject", actual: 1, status: "Tepat (Macet)" }
];

// ====================================================
// KOORDINAT GIS ASLI 9 WILAYAH INDONESIA (SESUAI TABEL)
// ====================================================
const provinceGISData = {
    dki: { name: "DKI Jakarta", coords: [-6.2088, 106.8456], twp: "19.8%", plafon: "Rp 450 Miliar", debitur: "9.550", status: "Prima (Aman)", color: "#10b981", radius: 24 },
    jatim: { name: "Jawa Timur & Bali", coords: [-7.5360, 112.2384], twp: "20.9%", plafon: "Rp 265 Miliar", debitur: "7.960", status: "Terkendali", color: "#0284c7", radius: 22 },
    banten: { name: "Banten", coords: [-6.4058, 106.0640], twp: "21.1%", plafon: "Rp 115 Miliar", debitur: "3.240", status: "Terkendali", color: "#0284c7", radius: 18 },
    jateng: { name: "Jawa Tengah & DIY", coords: [-7.1510, 110.1403], twp: "21.5%", plafon: "Rp 180 Miliar", debitur: "4.820", status: "Moderasi", color: "#f59e0b", radius: 20 },
    jabar: { name: "Jawa Barat", coords: [-6.9175, 107.6191], twp: "22.4%", plafon: "Rp 382 Miliar", debitur: "10.510", status: "Moderasi", color: "#f59e0b", radius: 28 },
    sumatera: { name: "Pulau Sumatera", coords: [0.5071, 101.4478], twp: "24.1%", plafon: "Rp 148 Miliar", debitur: "4.210", status: "Waspada Macet", color: "#ef4444", radius: 22 },
    kalimantan: { name: "Pulau Kalimantan (IKN)", coords: [-1.2379, 116.8289], twp: "24.8%", plafon: "Rp 95 Miliar", debitur: "2.680", status: "Pengetatan Plafon", color: "#dc2626", radius: 24 },
    sulawesi: { name: "Pulau Sulawesi", coords: [-4.1449, 119.8455], twp: "25.6%", plafon: "Rp 78 Miliar", debitur: "2.010", status: "Verifikasi Ketat", color: "#dc2626", radius: 22 },
    papua: { name: "Maluku & Papua", coords: [-3.5000, 138.0000], twp: "26.1%", plafon: "Rp 45 Miliar", debitur: "1.180", status: "Pagu Terbatas", color: "#991b1b", radius: 22 }
};

let leafletMap;
let mapMarkers = {};
let chartInstances = {};

// STATE PAGINASI
let currentPage = 1;
const rowsPerPage = 10;
let currentFilteredData = [...systemDatabase];

// ====================================================
// 2. INISIALISASI
// ====================================================
document.addEventListener("DOMContentLoaded", () => {
    initLeafletMap();
    initCharts();
    renderPaginatedTable();
});

// ====================================================
// 3. PETA ASLI INDONESIA: TILE ESRI (BEBAS WATERMARK)
// ====================================================
function initLeafletMap() {
    leafletMap = L.map('indonesiaLeafletMap', {
        center: [-2.2, 118.0],
        zoom: 4.8,
        minZoom: 4,
        maxZoom: 9,
        zoomControl: true,
        attributionControl: false
    });

    // Tile Esri World Light Gray (Bebas API Key & Tanpa Watermark)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 16
    }).addTo(leafletMap);

    renderMapMarkers('twp90');
}

function renderMapMarkers(metricType) {
    Object.values(mapMarkers).forEach(m => leafletMap.removeLayer(m));
    mapMarkers = {};

    Object.keys(provinceGISData).forEach(key => {
        const item = provinceGISData[key];

        let markerColor = item.color;
        let radius = item.radius;

        if (metricType === 'plafon') {
            markerColor = key === 'dki' || key === 'jabar' ? '#dc2626' : (key === 'jatim' ? '#f59e0b' : '#0284c7');
            radius = key === 'dki' ? 28 : (key === 'jabar' ? 26 : 16);
        } else if (metricType === 'debitur') {
            markerColor = key === 'jabar' ? '#dc2626' : (key === 'dki' || key === 'jatim' ? '#f59e0b' : '#059669');
            radius = key === 'jabar' ? 30 : 18;
        }

        const circle = L.circleMarker(item.coords, {
            radius: radius,
            fillColor: markerColor,
            color: '#ffffff',
            weight: 2.5,
            opacity: 1,
            fillOpacity: 0.85
        }).addTo(leafletMap);

        const popupContent = `
            <div style="font-family:'Plus Jakarta Sans',sans-serif; min-width:180px;">
                <h4 style="margin:0 0 4px 0; color:#0f172a; font-weight:800; font-size:13px; border-bottom:1px solid #e2e8f0; padding-bottom:4px;">${item.name}</h4>
                <div style="font-size:11px; margin:4px 0; display:flex; justify-content:space-between;"><span>Tingkat TWP90:</span> <b style="color:${item.color}">${item.twp}</b></div>
                <div style="font-size:11px; margin:4px 0; display:flex; justify-content:space-between;"><span>Total Plafon:</span> <b>${item.plafon}</b></div>
                <div style="font-size:11px; margin:4px 0; display:flex; justify-content:space-between;"><span>Total Debitur:</span> <b>${item.debitur}</b></div>
                <div style="margin-top:6px; font-size:10px; font-weight:800; color:#fff; background:${item.color}; padding:3px 6px; border-radius:4px; text-align:center;">${item.status}</div>
            </div>
        `;

        circle.bindPopup(popupContent);
        mapMarkers[key] = circle;
    });
}

function updateMapMetric(metricType) {
    renderMapMarkers(metricType);
}

// INI FUNGSI AGAR SUMATERA, KALIMANTAN, SULAWESI, PAPUA LANGSUNG TERBANG SAAT DIKLIK!
function focusProvince(key) {
    const item = provinceGISData[key];
    if (item && leafletMap && mapMarkers[key]) {
        leafletMap.flyTo(item.coords, 6, { duration: 1.2 });
        mapMarkers[key].openPopup();
    }
}

// ====================================================
// 4. CHART.JS RENDERING (4 GRAFIK PENDUKUNG LENGKAP)
// ====================================================
function initCharts() {
    const textColor = '#475569';
    const gridColor = '#cbd5e1';

    Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";
    Chart.defaults.font.size = 11;

    // 1. Sektor Tujuan Pinjaman
    chartInstances.purpose = new Chart(document.getElementById('purposeChart'), {
        type: 'bar',
        data: {
            labels: ['Modal UMKM', 'Pendidikan', 'Pribadi', 'Kesehatan', 'Renovasi', 'Hutang'],
            datasets: [{
                data: [16.5, 17.2, 20.1, 22.4, 23.8, 26.5],
                backgroundColor: ['#059669', '#0284c7', '#4f46e5', '#7c3aed', '#db2777', '#dc2626'],
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: textColor }, grid: { color: gridColor } },
                y: { ticks: { color: textColor, font: { weight: '700' } }, grid: { display: false } }
            }
        }
    });

    // 2. Donut Kebijakan
    chartInstances.decision = new Chart(document.getElementById('decisionChart'), {
        type: 'doughnut',
        data: {
            labels: ['Auto-Reject (56.4%)', 'Manual Review (39.4%)', 'Auto-Approved (4.2%)'],
            datasets: [{
                data: [56.43, 39.40, 4.17],
                backgroundColor: ['#dc2626', '#d97706', '#059669'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { position: 'bottom', labels: { color: textColor, font: { weight: '700' }, boxWidth: 10, padding: 12 } } 
            }
        }
    });

    // 3. Histogram Skor FICO
    chartInstances.score = new Chart(document.getElementById('scoreChart'), {
        type: 'bar',
        data: {
            labels: ['300-449', '450-549', '550-649', '650-749', '750-850'],
            datasets: [{
                data: [17964, 3840, 8703, 1150, 177],
                backgroundColor: ['#dc2626', '#f97316', '#d97706', '#4338ca', '#059669'],
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: textColor, font: { weight: '600' } }, grid: { display: false } },
                y: { ticks: { color: textColor }, grid: { color: gridColor } }
            }
        }
    });

    // 4. Kurva DSR Hazard
    chartInstances.dsr = new Chart(document.getElementById('dsrChart'), {
        type: 'line',
        data: {
            labels: ['<10%', '10-20%', '20-30%', '30-40%', '40-50%', '>50%'],
            datasets: [{
                label: 'Tingkat Macet (%)',
                data: [8.2, 13.5, 21.0, 38.6, 58.4, 74.2],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.12)',
                borderWidth: 2.5,
                fill: true,
                tension: 0.35,
                pointRadius: 4,
                pointBackgroundColor: '#dc2626'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: textColor, font: { weight: '600' } }, grid: { display: false } },
                y: { ticks: { color: textColor }, grid: { color: gridColor } }
            }
        }
    });
}

// ====================================================
// 5. SISTEM TABEL DENGAN NAVIGASI HALAMAN (PAGINASI)
// ====================================================
function renderPaginatedTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = Math.min(startIdx + rowsPerPage, currentFilteredData.length);
    const pageData = currentFilteredData.slice(startIdx, endIdx);

    pageData.forEach(row => {
        const tr = document.createElement('tr');
        const badgeColor = row.actual === 1 ? 'text-red' : 'text-green';
        const labelActual = row.actual === 1 ? 'Macet (TWP90)' : 'Lancar';

        tr.innerHTML = `
            <td><b>${row.id}</b></td>
            <td>Rp ${(row.gaji).toLocaleString('id-ID')}</td>
            <td>Rp ${(row.plafon).toLocaleString('id-ID')}</td>
            <td>${(row.dsr * 100).toFixed(1)}%</td>
            <td><b>${row.score}</b></td>
            <td>${row.decision}</td>
            <td class="${badgeColor}"><b>${labelActual}</b></td>
            <td><span class="status-pill green">✅ ${row.status}</span></td>
        `;
        tbody.appendChild(tr);
    });

    const totalDisplay = currentFilteredData.length;
    document.getElementById('pagination-info').innerHTML = 
        `Menampilkan <b>${startIdx + 1} - ${endIdx}</b> dari <b>${totalDisplay} Sampel Terverifikasi</b> (Mewakili 31.834 Populasi Debitur)`;
    
    document.getElementById('page-num').textContent = `Halaman ${currentPage}`;
    
    document.getElementById('btn-prev').disabled = (currentPage === 1);
    document.getElementById('btn-next').disabled = (endIdx >= totalDisplay);
}

function changePage(delta) {
    currentPage += delta;
    renderPaginatedTable();
}

function filterTable() {
    const query = document.getElementById('tableSearch').value.toLowerCase();
    currentFilteredData = systemDatabase.filter(d => 
        d.id.toLowerCase().includes(query) || 
        d.decision.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderPaginatedTable();
}

function filterByStatus(status) {
    document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (status === 'all') {
        currentFilteredData = [...systemDatabase];
    } else {
        currentFilteredData = systemDatabase.filter(d => d.decision.toLowerCase().includes(status.toLowerCase()));
    }
    currentPage = 1;
    renderPaginatedTable();
}

// ====================================================
// 6. NAVIGASI TAB APLIKASI
// ====================================================
function switchTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    document.getElementById(`tab-${tabId}`).classList.add('active');
    event.currentTarget.classList.add('active');

    const meta = {
        dashboard: { crumb: "Executive Overview", title: "Executive Risk Intelligence & Geographic Overview", sub: "Sistem Pemantauan Risiko Portofolio Pinjaman & Mitigasi Gagal Bayar (TWP90)" },
        checker: { crumb: "Underwriting Workspace", title: "Credit Underwriting & Real-Time Decisioning", sub: "Alat Evaluasi Analis Kredit: Verifikasi Kelayakan Debitur Baru Secara Instan" },
        database: { crumb: "Audit & Compliance Log", title: "Basis Data Portofolio & Jejak Rekam Audit", sub: "Audit Trail: Pembuktian Akurasi Prediksi Model terhadap Realisasi Lapangan" },
        architecture: { crumb: "Model Governance Specs", title: "Tata Kelola Model & Arsitektur Pemrosesan Data", sub: "Dokumentasi Pipeline Data, Estimasi Statistika, & Validasi Metrik Bisnis" }
    };

    document.getElementById('crumb-current').textContent = meta[tabId].crumb;
    document.getElementById('page-title').textContent = meta[tabId].title;
    document.getElementById('page-subtitle').textContent = meta[tabId].sub;

    if (tabId === 'dashboard') {
        setTimeout(() => {
            if (leafletMap) leafletMap.invalidateSize();
            Object.values(chartInstances).forEach(c => c.resize());
        }, 150);
    }
}

// ====================================================
// 7. PRESET CEPAT & KALKULATOR UNDERWRITING 4 KUADRAN
// ====================================================
function isiPreset(tipe) {
    if (tipe === 'aman') {
        document.getElementById('sim-gaji').value = 25000000;
        document.getElementById('sim-plafon').value = 20000000;
        document.getElementById('sim-rumah').value = 'Milik Sendiri';
        document.getElementById('sim-tujuan').value = 'Modal UMKM';
        document.getElementById('sim-slik').value = 'Tidak Pernah';
    } else if (tipe === 'macet') {
        document.getElementById('sim-gaji').value = 5000000;
        document.getElementById('sim-plafon').value = 35000000;
        document.getElementById('sim-rumah').value = 'Sewa/Kost';
        document.getElementById('sim-tujuan').value = 'Konsolidasi Hutang';
        document.getElementById('sim-slik').value = 'Pernah';
    }
    hitungSkorSimulasi();
}

function resetFormulir() {
    document.getElementById('sim-gaji').value = '';
    document.getElementById('sim-plafon').value = '';
    document.getElementById('sim-rumah').selectedIndex = 0;
    document.getElementById('sim-tujuan').selectedIndex = 0;
    document.getElementById('sim-slik').selectedIndex = 0;

    document.getElementById('res-score').textContent = '---';
    document.getElementById('res-badge').textContent = 'Siap Melakukan Evaluasi';
    document.getElementById('res-badge').className = 'cert-status-badge badge-standby';
    document.getElementById('res-prob-text').textContent = '---';
    document.getElementById('res-dsr').textContent = '---';
    document.getElementById('res-rec').textContent = '---';
    document.getElementById('res-rec').className = '';
    document.getElementById('res-rate').textContent = '---';
    document.getElementById('res-instruction').textContent = 'Sistem dalam status siaga (Standby). Masukkan data pemohon pada formulir di sebelah kiri atau pilih salah satu skenario simulasi cepat di atas untuk memulai kalkulasi skor kredit.';
}

function hitungSkorSimulasi() {
    const gaji = parseFloat(document.getElementById('sim-gaji').value);
    const plafon = parseFloat(document.getElementById('sim-plafon').value);
    const rumah = document.getElementById('sim-rumah').value;
    const tujuan = document.getElementById('sim-tujuan').value;
    const slik = document.getElementById('sim-slik').value;

    if (!gaji || !plafon || !rumah || !tujuan || !slik) {
        alert("Silakan lengkapi seluruh data formulir pemohon atau klik salah satu tombol 'Simulasi Cepat' di atas!");
        return;
    }

    const dsr = (plafon / (gaji * 12));

    let logit = -6.6802;
    logit += dsr * 12.7249;
    logit += 11.5 * 0.2996;

    if (rumah === 'Milik Sendiri') logit -= 1.4949;
    if (rumah === 'Sewa/Kost') logit += 0.7562;

    if (tujuan === 'Modal UMKM') logit -= 0.3824;
    if (tujuan === 'Pendidikan') logit -= 0.2440;
    if (tujuan === 'Renovasi Rumah') logit += 0.6965;
    if (tujuan === 'Konsolidasi Hutang') logit += 0.6271;

    if (slik === 'Tidak Pernah') logit -= 0.2074;

    const p = 1 / (1 + Math.exp(-logit));
    const odds = (1 - p) / Math.max(p, 0.0001);

    let score = Math.round(513.5 + 28.85 * Math.log(odds));
    score = Math.max(300, Math.min(850, score));

    document.getElementById('res-score').textContent = score;
    document.getElementById('res-dsr').textContent = (dsr * 100).toFixed(1) + "%";
    document.getElementById('res-prob-text').textContent = (p * 100).toFixed(1) + "%";

    const badge = document.getElementById('res-badge');
    const recText = document.getElementById('res-rec');
    const rateText = document.getElementById('res-rate');
    const instructionText = document.getElementById('res-instruction');

    if (score >= 650) {
        badge.textContent = "Auto-Approved (Risiko Rendah)";
        badge.className = "cert-status-badge badge-approved";
        recText.textContent = "Cairkan 100%";
        recText.className = "text-green";
        rateText.textContent = "0.9% / Bulan";
        instructionText.textContent = "Debitur memiliki profil arus kas sangat sehat dengan beban angsuran rendah (<30%). Pinjaman memenuhi syarat pencairan langsung tanpa agunan tambahan.";
    } else if (score >= 580) {
        badge.textContent = "Manual Review (Risiko Sedang)";
        badge.className = "cert-status-badge badge-review";
        recText.textContent = "Limit Dibatasi 50%";
        recText.className = "text-amber";
        rateText.textContent = "1.4% / Bulan";
        instructionText.textContent = "Risiko tergolong moderat. Analis kredit disarankan meminta mutasi rekening koran 3 bulan terakhir sebelum menyetujui sisa plafon.";
    } else {
        badge.textContent = "Auto-Reject (Risiko Tinggi)";
        badge.className = "cert-status-badge badge-reject";
        recText.textContent = "Penolakan Sistem";
        recText.className = "text-red";
        rateText.textContent = "Tidak Memenuhi Syarat";
        instructionText.textContent = "Peringatan bahaya! Beban hutang melebihi batas aman dan terdapat riwayat kredit buruk. Pengajuan ditolak otomatis guna menekan rasio TWP90.";
    }
}