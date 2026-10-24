const projects={
  "aod": {
    "key": "aod",
    "category": "research",
    "tone": "aod",
    "label": "OPTICS / FROM SIGNAL TO IMAGE",
    "headline": "给光一点“分身术”",
    "title": "光学成像：从 FPGA 扫描到 AOD 多焦点",
    "time": "2025 — 现在",
    "meta": "硕士研究 · 持续闯关中",
    "hint": "一束光，多几个分身",
    "tags": [
      "AOD",
      "FPGA / MEMS",
      "AD9910",
      "FFT"
    ],
    "summary": "想让成像看得更快、更广，就得先把光和信号安排明白。从 FPGA 闭环扫描，到 AOD 多频编码，我一直在给这套成像链路“打通任督二脉”。",
    "intro": "这是一条不断演进的研究线：前期围绕 FPGA、MEMS 振镜和光声采集做闭环扫描探索，后来转向 AOD 可编程多焦点光学成像。问题一直很有吸引力：能不能同时照亮更多位置，再从混在一起的信号里，把它们逐个认出来？",
    "goal": "让光跑得更灵活，让采集跟得上节奏，也让最后拿到的数据说得清楚自己来自哪里。",
    "content": [
      "前期积累：研究 FPGA PID 闭环扫描、MEMS 驱动、高速 DAQ 和前端电路，涉及滤波、基线校正与图像重建。",
      "当前主线：用 AOD 多频射频编码生成多焦点，再探索通过单探测器与 FFT 分离通道的成像方案。",
      "信号源这头：基于 STM32 + AD9910 做多音输出，加入 USB 控制、TTL 输出和状态显示。",
      "采集这头：联调示波器、采集卡与 LabVIEW 分析流程，检查目标谱线、触发记录和幅值提取。"
    ],
    "takeaway": "从“频谱上有了”到“这组数据可信”，中间还有同步、标定和记录边界要逐个过关。每搞清楚一个小问题，整条链路就更踏实一点。",
    "status": "基本电学链路已打通，101 个目标频点均已检出；触发记录对应、抗混叠、幅度标定和空间映射仍在验证。前期光声方案与当前光学成像按研究演进合并展示，活体成像仍是后续目标。"
  },
  "safety": {
    "key": "safety",
    "category": "robotics",
    "tone": "safety",
    "label": "ROBOTICS / A LITTLE MORE CAREFUL",
    "headline": "机械臂，咱轻一点",
    "title": "配餐柜机械臂实时保护",
    "time": "2025 · 美团",
    "meta": "无人机业务部 · 控制算法实习",
    "hint": "遇到不对劲，先停一下",
    "tags": [
      "Isolation Forest",
      "异常检测",
      "实时控制"
    ],
    "summary": "机械臂干活要利索，遇到碰撞也得够敏感。我给配餐柜的力矩信号加了一位“观察员”，努力让它该停就停，也别动不动误会一场。",
    "intro": "无人机配送的配餐柜里，机械臂需要重复搬运餐品。保护阈值太高，不够敏感；太低，又可能频繁误停。这次实习项目，就是在这两头之间找一个更靠谱的平衡。",
    "goal": "早点发现真正的异常，同时少被正常波动吓一跳，让设备保护和日常作业尽量合拍。",
    "content": [
      "基于 Isolation Forest 开发力矩实时异常检测模型，并结合动态阈值调优。",
      "引入多级滤波与滑动窗口，整理从信号到保护动作的决策链路。",
      "完成配餐柜实机测试、参数调整和设计验证，检查漏检与误报表现。"
    ],
    "takeaway": "模型分数只是中间结果，最终还得回到设备：它什么时候停、为什么停、正常动作会不会被打断。",
    "status": "按简历中的项目验证口径：召回率 ≥99%，保护触发力阈值由 450 N 调至 50 N，DVT 误报率控制在 2% 以内。指标对应该配餐柜项目的测试条件。"
  },
  "vla": {
    "key": "vla",
    "category": "robotics",
    "tone": "vla",
    "label": "EMBODIED AI / SHOW, LEARN, REPEAT",
    "headline": "机器人，跟我学一招",
    "title": "VLA 微调与遥操作数据采集",
    "time": "2025 · 美团",
    "meta": "机器人研究院 · 具身智能实习",
    "hint": "先示范，再一起练习",
    "tags": [
      "VLA",
      "SpaceMouse",
      "RealSense",
      "策略蒸馏"
    ],
    "summary": "想教会机器人做事，得先给它靠谱的“学习材料”。我参与搭建遥操作和视觉采集平台，再把动作、画面与质量检查接到 VLA 验证流程里。",
    "intro": "大模型进入真实世界之后，问题会突然变得很具体：机械臂怎么跟着人动？动作和画面能不能对上？哪些示范值得拿去训练？我在这段实习里主要负责数据采集基础设施和算法验证。",
    "goal": "把“人示范一次”变成机器人可以学习的数据，再给后续微调与策略蒸馏打好底。",
    "content": [
      "基于法奥、松灵机械臂 SDK 做二次开发，集成 SpaceMouse 六维鼠标遥操作。",
      "融合 RealSense 深度相机，联调动作与视觉流采集。",
      "围绕动作平滑度、视觉遮挡和末端位姿一致性制定质量检查，开发样本筛选工具。",
      "参与 chunk-based VLA 微调实验，以及真实世界策略蒸馏与奖励标注流程部署。"
    ],
    "takeaway": "数据平台看起来是幕后工作，却会影响后面每一步。把动作采顺、画面对齐、坏样本挑出来，模型才有更好的起点。",
    "status": "根据个人简历，相关成果发表于 ICRA 2026，本人为第二作者。这里展示的是采集平台、质量筛选与算法验证中的个人参与内容。"
  },
  "motor": {
    "key": "motor",
    "category": "software",
    "tone": "motor",
    "label": "AUTOMATION / LESS COPYING, MORE TESTING",
    "headline": "测试这事，交给小助手",
    "title": "电机桨叶自动测试台",
    "time": "2026",
    "meta": "测试工具 · Windows 运行包",
    "hint": "少抄读数，多看曲线",
    "tags": [
      "Python",
      "PX4",
      "计算机视觉",
      "Windows"
    ],
    "summary": "一边调油门、一边盯仪表、还要记数据？把这些步骤串起来：PX4 管控制，相机帮忙读表，上位机负责安排流程，最后把曲线和记录交出来。",
    "intro": "电机和桨叶的测试会产生不少重复动作：设档位、等稳定、读仪表、记结果，再来一轮。这个上位机把流程集中到一个工作台里，也把原始照片、数据和失败记录留了下来。",
    "goal": "让测试更有条理，减少反复手抄，也方便回头查看每个点是怎么测出来的。",
    "content": [
      "连接 PX4 执行器控制与 USB 摄像头读表，支持测试方案编辑和逐档执行。",
      "提供历史回放、曲线查看、失败档续测，以及测试结果和曲线导出。",
      "保存仪表照片、原始数据与运行记录，方便定位读数和流程问题。",
      "整理 Windows x64 免安装文件夹运行包，以及操作、部署和开发交接资料。"
    ],
    "takeaway": "“跑完一轮”只是开始，能重放、能追查、换台电脑还能用，才更像一个顺手的工具。",
    "status": "运行包已完成实际解压后的离线自检，交付记录包含 93 项离线回归。更换电脑后的设备连接、标定和实机运行仍需现场验收。图中的曲线是界面示意。"
  },
  "rm68": {
    "key": "rm68",
    "category": "embedded",
    "tone": "mesh",
    "label": "EMBEDDED / NEW HOME FOR OLD HARDWARE",
    "headline": "给开发板搬个新家",
    "title": "HLK-RM68 · ImmortalWrt 移植",
    "time": "2026",
    "meta": "嵌入式网络 · 单机实测",
    "hint": "从能启动，到能好好用",
    "tags": [
      "ImmortalWrt",
      "Linux",
      "802.11s",
      "嵌入式"
    ],
    "summary": "从原有 SDK 出发，给 RM68 换上 ImmortalWrt。启动、网口、双频无线，再到一个轻量管理页——每多亮起一项功能，都有点通关的快乐。",
    "intro": "一块硬件换系统，往往不是“编译完就好了”。启动链路、驱动、内存和网络配置都得配合起来。这个项目沿着“先起来、再连通、最后用顺手”的路线慢慢推进。",
    "goal": "让 RM68 在新的系统里完成基本网络工作，并能通过清楚的界面查看和调整配置。",
    "content": [
      "推进单机启动与持久安装，验证配置重启保留、有线转发和双频 AP。",
      "开展 2.4 GHz / 5 GHz mesh 与 AP 的本地启动和共存测试。",
      "实现轻量中文 HTTPS 管理页，展示设备状态并支持无线与 mesh 配置。",
      "加入未确认修改自动恢复，给调整网络配置留一条回来的路。"
    ],
    "takeaway": "能显示“运行中”和真的完成通信，是两件需要分别验证的事。底层移植的乐趣，就是把这些看似相邻的小关卡逐个打通。",
    "status": "已有单机启动、双频 AP 传输与管理页访问记录。双节点与多跳 mesh、长期负载、户外性能及部分射频校准仍需后续验证。"
  },
  "voice": {
    "key": "voice",
    "category": "software",
    "tone": "voice",
    "label": "VOICE / SAY IT, MAKE IT HAPPEN",
    "headline": "动动嘴，让设备忙起来",
    "title": "语音测控与智能助手",
    "time": "2024 — 2025",
    "meta": "本科毕设 · 后续升级",
    "hint": "说一句，硬件动一下",
    "tags": [
      "Kaldi",
      "C++ / Qt",
      "树莓派",
      "语音交互"
    ],
    "summary": "从“听懂指令，调调温度”的本科毕设起步，再给它加上 Qt 界面和自然语言对话。一个小小测控系统，就这样多了点聊天搭子的意思。",
    "intro": "起点很直接：不按按钮，能不能说句话让设备调温？我用语音识别接上树莓派和外设，完成一个闭环测控原型，后来又把它往更自然的交互方向推了一步。",
    "goal": "让语音成为控制设备的一种入口，并尝试从固定命令走向自然语言交互。",
    "content": [
      "2024 年本科毕设：使用 Kaldi 训练声学与语言模型，用 C++ 实现实时解码。",
      "部署到树莓派，连接加热器、风扇等外设，实现语音控制与温度闭环调节。",
      "2025 年迭代：开发 C++ / Qt 跨平台界面，集成 OpenAI API，加入自然语言理解与多轮对话。",
      "完成软硬件联调，并把部分开发过程制作成技术视频分享。"
    ],
    "takeaway": "一句“帮我调一下”，背后要让识别、界面、控制和硬件都接得住。小项目也可以不断长出新玩法。",
    "status": "简历记录：目标命令在多种噪声环境下综合识别率为 91%；相关技术视频在抖音、B 站等平台累计获得 2 万余次阅读。识别率对应本项目的命令与测试条件。"
  },
  "poultry": {
    "key": "poultry",
    "category": "software",
    "tone": "poultry",
    "label": "EDGE VISION / KEEP AN EYE ON THE FLOCK",
    "headline": "给鸡舍装双“电子眼”",
    "title": "智能鸡舍健康监测系统",
    "time": "2023.06 — 2023.08",
    "meta": "边缘视觉 · 计算机大赛决赛铜奖",
    "hint": "今天的小鸡，状态如何？",
    "tags": [
      "YOLOv5",
      "RK3588",
      "ESP32",
      "MQTT"
    ],
    "summary": "鸡只不会主动汇报状态，那就让摄像头帮忙看看。从图像标注、模型训练，到边缘推理和云端看板，把“看一眼鸡舍”变成一条完整的数据链。",
    "intro": "养殖场景里的观察很重要，也很重复。这个项目尝试通过视觉识别鸡只行为与健康相关状态，再把结果汇总到云端，让现场画面和远端看板连起来。",
    "goal": "在成本和延迟可控的前提下，让异常状态更容易被发现，也让多处鸡舍的信息集中起来。",
    "content": [
      "采集并标注约 8,000 张鸡只图像，基于 YOLOv5 训练行为与健康状态识别模型。",
      "将模型部署到 RK3588，接收树莓派与 ESP32 采集系统的摄像头图像进行推理。",
      "通过 MQTT 将识别结果和设备状态上传至阿里云 IoT。",
      "使用 IoT Studio 搭建实时监控面板，展示多鸡舍状态与告警信息。"
    ],
    "takeaway": "模型只是链路里的一站。图像能进来、结果能出去、看板能看懂，才能把一个识别实验变成一套可用系统。",
    "status": "个人简历记录项目准确率为 85%，并获 2023 年中国高校计算机大赛决赛铜奖。指标按当时项目实验口径展示。"
  },
  "algo": {
    "key": "algo",
    "category": "software",
    "tone": "algo",
    "label": "ALGORITHMS / TWO BRAINS, MORE QUESTIONS",
    "headline": "和队友一起，刷点新问题",
    "title": "2026 腾讯广告算法竞赛",
    "time": "2026",
    "meta": "算法探索 · Nat & Eason",
    "hint": "新题目，开一局",
    "tags": [
      "算法竞赛",
      "团队协作",
      "实验探索"
    ],
    "summary": "换个赛道继续保持好奇。和队友 Nat 一起建立广告算法竞赛工作空间，给问题分析和实验留个位置，也给自己加一道值得琢磨的新题。",
    "intro": "这个项目是与队友一起开展的算法竞赛探索。相比已经有较多实验记录的硬件项目，它目前更像一本刚翻开的练习册：先搭好工作空间，再一点点补上分析与实验。",
    "goal": "在竞赛任务里练习拆解问题、组织数据和开展实验，也把协作过程积累下来。",
    "content": [
      "建立 2026 腾讯广告算法竞赛项目，团队记录为 Nat & Eason。",
      "仓库已有数据目录与测试代码，作为分析与实验的工作空间。",
      "当前可展示内容以项目方向、工作空间和团队协作为主。"
    ],
    "takeaway": "遇到陌生任务，先把问题摊开、让思路有地方落笔。至于这次能解锁什么，就留给后面的实验来回答。",
    "status": "持续探索中。目前资料尚未确认具体模型、评测指标或竞赛排名，等有可靠的实验结果，再来给这张卡片续上下一章。"
  }
};
const dialog=document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
 const p=projects[button.dataset.project];
 document.querySelector('#dialog-kicker').textContent=p.label;
 document.querySelector('#dialog-title').textContent=p.title;
 for(const key of ['intro','goal','takeaway','status'])document.querySelector('#dialog-'+key).textContent=p[key];
 document.querySelector('#dialog-tags').replaceChildren(...p.tags.map(t=>{const el=document.createElement('span');el.textContent=t;return el}));
 document.querySelector('#dialog-content').replaceChildren(...p.content.map(t=>{const el=document.createElement('li');el.textContent=t;return el}));
 dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');
}));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close()});
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 document.querySelectorAll('.project').forEach(p=>p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter);
}));
document.querySelector('.experience-stamp a').addEventListener('click',()=>document.querySelector('[data-filter="robotics"]').click());
let toastTimeout;
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),3200)}
document.querySelector('#share-link').addEventListener('click',async()=>{const url=location.origin+location.pathname;try{await navigator.clipboard.writeText(url);toast('链接已复制！把这份折腾传出去 ↗')}catch{const text=document.createElement('textarea');text.value=url;text.style.cssText='position:fixed;left:-9999px';document.body.append(text);text.select();try{if(!document.execCommand('copy'))throw Error();toast('链接已复制！把这份折腾传出去 ↗')}catch{toast('请复制浏览器地址栏中的主页链接。')}text.remove()}});
