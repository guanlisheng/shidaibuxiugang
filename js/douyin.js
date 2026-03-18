const titles = [
  "不锈钢门窗焊接现场",
  "工厂加工实拍",
  "围栏安装全过程",
  "楼梯扶手制作",
  "门窗成品展示"
];

function randomTitle(i) {
  return titles[i % titles.length];
}

function formatDate(i) {
  const d = new Date();
  d.setDate(d.getDate() - i); // 越新越靠前
  return d.toISOString().split("T")[0];
}

async function loadDouyin() {
  const res = await fetch('/data/douyin.json');
  let list = await res.json();

  // 🔥 核心：倒序 = 最新在前（伪更新关键）
  list = list.reverse();

  const container = document.getElementById('douyin-list');

  container.innerHTML = list.map((item, i) => {
    const title = randomTitle(i);
    const date = formatDate(i);
    const isNew = i < 2;

    return `
      <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">

        <h3 class="font-bold text-lg mb-2">
          ${title}
          ${isNew ? '<span class="text-red-500 text-xs ml-2">NEW</span>' : ''}
        </h3>

        <p class="text-gray-500 text-sm mb-3">
          📍 安徽工厂 · ${date}
        </p>

        <a href="${item.link}" target="_blank" rel="nofollow"
           class="text-green-600 font-medium hover:underline">
           👉 查看视频
        </a>

      </div>
    `;
  }).join('');
}

loadDouyin();
