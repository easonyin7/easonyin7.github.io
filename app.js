const projects={
  "gimbal": {
    "key": "gimbal",
    "category": "robotics",
    "tone": "gimbal",
    "label": "DUAL VISION / TWO EYES, ONE GIMBAL",
    "headline": "给云台装上“双重视力”",
    "title": "基于 MaixCAM2 的 RGB–热成像融合智能跟踪云台",
    "time": "原型 → V2",
    "meta": "双光视觉 · 持续迭代中",
    "hint": "看得见，也要跟得稳",
    "tags": [
      "C++",
      "Python",
      "Linux",
      "MaixCDK",
      "YOLO11-Pose",
      "YOLOv8"
    ],
    "summary": "普通相机负责看动作，热成像再帮忙确认：这是人吗？两路视觉和双轴云台一起配合，让设备持续跟着人看，也尝试看懂举手、持械等状态，再用灯光提醒。",
    "intro": "这是我在哈尔滨工业大学（深圳）RA 工作期间开展的项目。让云台“看见人”只是第一步：人一动、被挡一下、画面一转，它还认不认得？这个项目基于 MaixCAM2，把 RGB 人体与姿态识别、热成像复核、多目标跟踪和双轴控制接成一条链，探索一套能看、会跟、也能发出灯光提醒的双光原型。",
    "content": [
      "将 Python 原型迁往嵌入式 Linux 上的 C++ 多线程架构，解耦视觉推理、热复核、控制、显示和录像。",
      "集成 YOLO11-Pose 与 ByteTrack，加入逻辑 ID 关联，衔接短时漏检、遮挡与轨迹换号时的目标状态。",
      "以腕部关键点、时序积分和状态保持关联持械检测，组织目标优先级、举手判断与灯光告警。",
      "接入 Thermal256 原始温度；早期原型探索历史框插值、时延假设和 IMU 补偿，处理双光异步与云台运动。",
      "结合视觉误差与 IMU 阻尼开展双轴控制，开发标定、日志和录像分析工具。早期原型记录的 100 Hz 指控制循环频率。"
    ],
    "affiliation": "哈尔滨工业大学（深圳） · RA 项目",
    "organization": "hitsz",
    "en": {
      "headline": "Two eyes, one curious gimbal",
      "title": "MaixCAM2 RGB–Thermal Fusion Tracking Gimbal",
      "meta": "Dual vision · Iterating on V2",
      "time": "Prototype → V2",
      "hint": "See the person. Keep up smoothly.",
      "tags": [
        "C++",
        "Python",
        "Linux",
        "MaixCDK",
        "YOLO11-Pose",
        "YOLOv8"
      ],
      "summary": "An RGB camera reads movement, while thermal imaging helps check whether a detection looks human. Together with a two-axis gimbal, they support continuous tracking, raised-hand and weapon-carrying state detection, and light alerts.",
      "intro": "Developed during my research assistant work at Harbin Institute of Technology, Shenzhen. Detecting a person is just the first step: can the system keep track when they move, disappear briefly, or the camera turns? This MaixCAM2 prototype connects pose estimation, thermal checks, multi-object tracking, and two-axis control.",
      "content": [
        "Migrated the Python prototype toward threaded C++ on embedded Linux, separating inference, thermal checks, control, display, and recording.",
        "Integrated YOLO11-Pose and ByteTrack with logical ID association to retain target state across missed detections, occlusion, and track-ID changes.",
        "Associated object detections with wrist keypoints, temporal integration, and state holding for target priority, raised-hand states, and light alerts.",
        "Read Thermal256 raw temperatures; the earlier prototype explored historical-box interpolation, delay hypotheses, and IMU compensation for asynchronous sensors and gimbal motion.",
        "Worked on two-axis control with visual error/IMU damping, calibration, logging, and recording analysis. The earlier prototype’s 100 Hz figure describes the control loop."
      ],
      "affiliation": "HIT Shenzhen · Research assistant project",
      "cardTags": [
        "MaixCAM2",
        "C++",
        "RGB + Thermal",
        "ByteTrack",
        "IMU"
      ],
      "scope": "The prototype is being iterated in V2; control and recording features depend on the version."
    },
    "cardTags": [
      "MaixCAM2",
      "C++",
      "RGB + Thermal",
      "ByteTrack",
      "IMU"
    ],
    "featured": true,
    "resources": [],
    "scope": "原型已进入 V2 迭代，具体控制与录像功能以对应版本为准。"
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
    "intro": "这是我在哈尔滨工业大学（深圳）RA 工作期间开展的项目。电机和桨叶的测试会产生不少重复动作：设档位、等稳定、读仪表、记结果，再来一轮。这个上位机把流程集中到一个工作台里，也把原始照片、数据和失败记录留了下来。",
    "content": [
      "连接 PX4 执行器控制与 USB 摄像头读表，支持测试方案编辑和逐档执行。",
      "提供历史回放、曲线查看、失败档续测，以及测试结果和曲线导出。",
      "保存仪表照片、原始数据与运行记录，方便定位读数和流程问题。",
      "整理 Windows x64 免安装文件夹运行包，以及操作、部署和开发交接资料。"
    ],
    "affiliation": "哈尔滨工业大学（深圳） · RA 项目",
    "organization": "hitsz",
    "en": {
      "headline": "Let a little helper run the tests",
      "title": "Automated Motor and Propeller Test Bench",
      "meta": "Test tooling · Windows package",
      "time": "2026",
      "hint": "Less copying. More useful curves.",
      "tags": [
        "Python",
        "PX4",
        "Computer vision",
        "Windows"
      ],
      "summary": "Adjust the throttle, watch the instruments, and write everything down? This desktop tool joins PX4 control, camera-based instrument reading, test sequencing, and data export into one workspace.",
      "intro": "Developed during my research assistant work at Harbin Institute of Technology, Shenzhen. Motor and propeller testing involves plenty of repeated steps: set a level, wait, read, record, and repeat. The application organizes that workflow and keeps the original images, data, and failure records.",
      "content": [
        "Connected PX4 actuator control with USB-camera instrument reading, editable test plans, and step-by-step execution.",
        "Added historical replay, curve viewing, resume-from-failure workflows, and result and chart export.",
        "Saved instrument images, raw data, and run records to help investigate reading and workflow issues.",
        "Prepared a portable Windows x64 folder package with operation, deployment, and developer handover notes."
      ],
      "affiliation": "HIT Shenzhen · Research assistant project",
      "cardTags": [
        "Python",
        "PX4",
        "Computer vision",
        "Windows"
      ],
      "scope": "Code and operating docs are public; new hardware and workflows still need their own hardware validation."
    },
    "cardTags": [
      "Python",
      "PX4",
      "计算机视觉",
      "Windows"
    ],
    "featured": true,
    "resources": [
      {
        "zh": "GitHub 仓库",
        "en": "GitHub repository",
        "url": "https://github.com/easonyin7/motor-propeller-test-bench"
      }
    ],
    "scope": "代码与操作文档已公开；新设备与测试流程仍需对应的实机验证。"
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
    "intro": "这是我在哈尔滨工业大学（深圳）RA 工作期间开展的项目。一块硬件换系统，往往不是“编译完就好了”。启动链路、驱动、内存和网络配置都得配合起来。这个项目沿着“先起来、再连通、最后用顺手”的路线慢慢推进。",
    "content": [
      "推进单机启动与持久安装，验证配置重启保留、有线转发和双频 AP。",
      "开展 2.4 GHz / 5 GHz mesh 与 AP 的本地启动和共存测试。",
      "实现轻量中文 HTTPS 管理页，展示设备状态并支持无线与 mesh 配置。",
      "加入未确认修改自动恢复，给调整网络配置留一条回来的路。"
    ],
    "affiliation": "哈尔滨工业大学（深圳） · RA 项目",
    "organization": "hitsz",
    "en": {
      "headline": "A new home for a familiar board",
      "title": "HLK-RM68 · ImmortalWrt Port",
      "meta": "Embedded networking · Single-device tests",
      "time": "2026",
      "hint": "From booting up to working well.",
      "tags": [
        "ImmortalWrt",
        "Linux",
        "802.11s",
        "Embedded systems"
      ],
      "summary": "Moving the RM68 from its original SDK to ImmortalWrt: boot, Ethernet, dual-band wireless, and a small management UI. Every working piece feels like clearing another level.",
      "intro": "Developed during my research assistant work at Harbin Institute of Technology, Shenzhen. Porting a board is rarely finished when compilation succeeds. Boot, drivers, memory, and networking all need to cooperate. The route here was to get it running, get it connected, and then make it pleasant to use.",
      "content": [
        "Worked through boot and persistent installation, testing configuration retention, wired forwarding, and dual-band access points.",
        "Tested local startup and coexistence of 2.4 GHz / 5 GHz mesh and AP interfaces.",
        "Built a lightweight Chinese HTTPS management UI for device status, wireless, and mesh settings.",
        "Added automatic restoration of unconfirmed changes, leaving a way back after a network configuration edit."
      ],
      "affiliation": "HIT Shenzhen · Research assistant project",
      "cardTags": [
        "ImmortalWrt",
        "Linux",
        "802.11s",
        "Embedded"
      ],
      "scope": "Single-node boot, dual-band AP, and the management UI have been checked; multi-node mesh remains untested."
    },
    "cardTags": [
      "ImmortalWrt",
      "Linux",
      "802.11s",
      "嵌入式"
    ],
    "featured": true,
    "resources": [
      {
        "zh": "GitHub 仓库",
        "en": "GitHub repository",
        "url": "https://github.com/easonyin7/hlk-rm68-immortalwrt"
      }
    ],
    "scope": "已完成单机启动、双频 AP 和管理页验证；多节点 mesh 仍待测试。"
  },
  "jetson": {
    "key": "jetson",
    "category": "software",
    "tone": "jetson",
    "label": "EDGE AI / SMALL MODELS, BIG QUESTIONS",
    "headline": "让小盒子，也想想大问题",
    "title": "Jetson Orin 端侧大模型量化与任务规划能力测试",
    "time": "探索中",
    "meta": "端侧大模型 · 能力测试",
    "affiliation": "哈尔滨工业大学（深圳） · RA 项目",
    "hint": "先装得下，再看看想得怎样",
    "tags": [
      "Jetson Orin",
      "端侧 LLM",
      "模型量化",
      "推理加速",
      "模型部署",
      "标准化评测"
    ],
    "summary": "把小参数大模型搬到 Jetson Orin 上，看看算力有限的小盒子能不能做好任务规划。围绕量化、推理加速、部署和统一测试，摸一摸“装得下”和“用得好”之间的距离。",
    "intro": "这是我在哈尔滨工业大学（深圳）RA 工作期间开展的一项端侧模型探索。在算力有限的终端上，小参数大模型经过量化之后，还能不能把任务想清楚、规划明白？我在 Jetson Orin 上做模型部署与能力测试，把这个问题放到实际设备里看看。",
    "content": [
      "开展小参数大模型的量化工作，探索在有限终端资源上运行模型的方案。",
      "围绕端侧推理做加速与运行调试，并在 Jetson Orin 上完成模型部署。",
      "针对任务规划开展能力测试，关注模型在实际任务中的理解与规划表现。",
      "整理标准化能力测试流程，统一任务、运行条件与结果记录，便于比较不同部署与量化方案。"
    ],
    "organization": "hitsz",
    "en": {
      "headline": "Big questions for a small box",
      "title": "Jetson Orin: Quantized LLMs and Task-Planning Evaluation",
      "meta": "Edge language models · Capability tests",
      "time": "Exploring",
      "hint": "Make it fit. Then see how it thinks.",
      "tags": [
        "Jetson Orin",
        "Edge LLMs",
        "Quantization",
        "Inference acceleration",
        "Model deployment",
        "Standardized evaluation"
      ],
      "summary": "Putting small language models on Jetson Orin to explore task planning under limited compute. Quantization, faster inference, deployment, and consistent evaluation help connect ‘fits on the device’ with ‘works for the task.’",
      "intro": "An edge-model exploration from my research assistant work at Harbin Institute of Technology, Shenzhen. After quantization, can a small language model still understand a task and plan it well? I used deployment and capability tests on Jetson Orin to explore that question on actual hardware.",
      "content": [
        "Worked on quantization of small language models for resource-constrained devices.",
        "Worked on inference acceleration, runtime debugging, and model deployment on Jetson Orin.",
        "Tested task-planning capabilities, focusing on understanding and planning in concrete tasks.",
        "Organized standardized evaluation with consistent tasks, runtime conditions, and result records for comparing deployment and quantization choices."
      ],
      "affiliation": "HIT Shenzhen · Research assistant project",
      "cardTags": [
        "Jetson Orin",
        "Edge LLMs",
        "Quantization",
        "Inference acceleration",
        "Model deployment",
        "Standardized evaluation"
      ],
      "scope": "Exploration is ongoing; performance comparisons will follow the experiment records."
    },
    "cardTags": [
      "Jetson Orin",
      "端侧 LLM",
      "模型量化",
      "推理加速",
      "模型部署",
      "标准化评测"
    ],
    "featured": false,
    "resources": [],
    "scope": "持续探索中，性能对比结果按后续实验记录补充。"
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
    "content": [
      "基于 Isolation Forest 开发力矩实时异常检测模型，并结合动态阈值调优。",
      "引入多级滤波与滑动窗口，整理从信号到保护动作的决策链路。",
      "完成配餐柜实机测试、参数调整和设计验证，检查漏检与误报表现。"
    ],
    "organization": "meituan",
    "en": {
      "headline": "Easy there, robot arm",
      "title": "Real-Time Protection for a Meal-Cabinet Robot Arm",
      "meta": "Drone business · Control algorithms",
      "time": "2025 · Meituan",
      "hint": "Something feels off? Pause first.",
      "tags": [
        "Isolation Forest",
        "Anomaly detection",
        "Real-time control"
      ],
      "summary": "A robot arm should work efficiently and notice collisions early. I worked on a ‘watcher’ for torque signals, aiming to stop when needed without turning ordinary fluctuations into constant interruptions.",
      "intro": "An internship project in Meituan’s drone business. A meal-cabinet robot arm repeatedly handles orders: a high protection threshold may miss early contact, while a low one can cause unnecessary stops. The project sought a better balance.",
      "content": [
        "Developed real-time torque anomaly detection using Isolation Forest and dynamic threshold tuning.",
        "Combined multistage filtering and sliding windows to improve the decision chain from signal to protective action.",
        "Performed device tests, parameter tuning, and design verification, examining missed detections and false alarms."
      ],
      "affiliation": "Meituan · Internship project",
      "cardTags": [
        "Isolation Forest",
        "Anomaly detection",
        "Real-time control"
      ],
      "scope": ""
    },
    "affiliation": "美团 · 实习项目",
    "cardTags": [
      "Isolation Forest",
      "异常检测",
      "实时控制"
    ],
    "featured": true,
    "resources": [],
    "scope": ""
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
    "content": [
      "基于法奥、松灵机械臂 SDK 做二次开发，集成 SpaceMouse 六维鼠标遥操作。",
      "融合 RealSense 深度相机，联调动作与视觉流采集。",
      "围绕动作平滑度、视觉遮挡和末端位姿一致性制定质量检查，开发样本筛选工具。",
      "参与 chunk-based VLA 微调实验，以及真实世界策略蒸馏与奖励标注流程部署。"
    ],
    "organization": "meituan",
    "en": {
      "headline": "Robot, let me show you a move",
      "title": "VLA Fine-Tuning and Teleoperation Data Collection",
      "meta": "Robotics institute · Embodied AI",
      "time": "2025 · Meituan",
      "hint": "Show it once. Learn and try again.",
      "tags": [
        "VLA",
        "SpaceMouse",
        "RealSense",
        "Policy distillation"
      ],
      "summary": "Teaching a robot starts with useful learning material. I helped build teleoperation and visual data collection, then connected actions, images, and data-quality checks to VLA validation workflows.",
      "intro": "An internship project at Meituan’s robotics institute. In the real world, model research quickly turns into concrete questions: how does the arm follow an operator, do actions match the images, and which demonstrations are worth training on? My focus was collection infrastructure and algorithm validation.",
      "content": [
        "Extended FAIRINO and AgileX robot-arm SDKs and integrated SpaceMouse six-degree-of-freedom teleoperation.",
        "Integrated RealSense depth cameras and coordinated action and visual-stream collection.",
        "Designed quality checks around motion smoothness, visual occlusion, and end-effector pose consistency, with automated sample filtering.",
        "Participated in chunk-based VLA fine-tuning experiments and deployment of real-world policy distillation and reward-annotation workflows."
      ],
      "affiliation": "Meituan · Internship project",
      "cardTags": [
        "VLA",
        "SpaceMouse",
        "RealSense",
        "Policy distillation"
      ],
      "scope": "Second author on related work published at ICRA 2026."
    },
    "affiliation": "美团 · 实习项目",
    "cardTags": [
      "VLA",
      "SpaceMouse",
      "RealSense",
      "策略蒸馏"
    ],
    "featured": true,
    "resources": [],
    "scope": "相关成果发表于 ICRA 2026，第二作者。"
  },
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
    "content": [
      "前期积累：研究 FPGA PID 闭环扫描、MEMS 驱动、高速 DAQ 和前端电路，涉及滤波、基线校正与图像重建。",
      "当前主线：用 AOD 多频射频编码生成多焦点，再探索通过单探测器与 FFT 分离通道的成像方案。",
      "信号源这头：基于 STM32 + AD9910 做多音输出，加入 USB 控制、TTL 输出和状态显示。",
      "采集这头：联调示波器、采集卡与 LabVIEW 分析流程，检查目标谱线、触发记录和幅值提取。"
    ],
    "organization": "other",
    "en": {
      "headline": "A little beam-splitting magic",
      "title": "Optical Imaging: From FPGA Scanning to AOD Multifocal Excitation",
      "meta": "Master’s research · Work in progress",
      "time": "2025 — Present",
      "hint": "One beam, a few more possibilities.",
      "tags": [
        "AOD",
        "FPGA / MEMS",
        "AD9910",
        "FFT"
      ],
      "summary": "Faster and wider imaging starts with getting light and signals organized. From FPGA closed-loop scanning to AOD frequency encoding, I have been connecting the pieces of an evolving imaging chain.",
      "intro": "An evolving research line: earlier work explored FPGA control, MEMS scanning, and photoacoustic acquisition; the current direction is AOD-programmable multifocal optical imaging. The central question is how to illuminate more locations at once and recover their individual contributions from a mixed signal.",
      "content": [
        "Earlier work explored FPGA PID scanning, MEMS drivers, high-speed DAQ, and analog front ends, including filtering, baseline correction, and image reconstruction.",
        "The current direction uses multifrequency RF encoding in an AOD to generate multiple foci and explores single-detector FFT separation.",
        "Built a multitone signal source with STM32 and AD9910, including USB control, TTL outputs, and status display.",
        "Connected oscilloscope checks, acquisition hardware, and LabVIEW analysis to examine spectral lines, trigger records, and amplitude extraction."
      ],
      "cardTags": [
        "AOD",
        "FPGA / MEMS",
        "AD9910",
        "FFT"
      ],
      "scope": "Current validation focuses on the electrical and frequency-domain chain; imaging work is ongoing."
    },
    "cardTags": [
      "AOD",
      "FPGA / MEMS",
      "AD9910",
      "FFT"
    ],
    "featured": false,
    "resources": [],
    "scope": "目前以电学与频域验证为主，成像链路仍在推进。"
  },
  "voice": {
    "key": "voice",
    "category": "embedded",
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
    "content": [
      "2024 年本科毕设：使用 Kaldi 训练声学与语言模型，用 C++ 实现实时解码。",
      "部署到树莓派，连接加热器、风扇等外设，实现语音控制与温度闭环调节。",
      "2025 年迭代：开发 C++ / Qt 跨平台界面，集成 OpenAI API，加入自然语言理解与多轮对话。",
      "完成软硬件联调，并把部分开发过程制作成技术视频分享。"
    ],
    "organization": "other",
    "en": {
      "headline": "Say a word. Let the hardware help.",
      "title": "Voice-Controlled Measurement and Smart Assistant",
      "meta": "Undergraduate project · Later iterations",
      "time": "2024 — 2025",
      "hint": "Say something. Make something happen.",
      "tags": [
        "Kaldi",
        "C++ / Qt",
        "Raspberry Pi",
        "Voice interaction"
      ],
      "summary": "A graduation project that listens to commands and regulates temperature, later extended with a Qt interface and natural-language conversation. A small measurement system picked up a few conversational skills along the way.",
      "intro": "The starting question was simple: could a spoken command regulate a device without pressing a button? I connected speech recognition, a Raspberry Pi, and peripherals into a closed-loop prototype, then explored more natural interaction.",
      "content": [
        "For the 2024 undergraduate project, trained acoustic and language models with Kaldi and implemented real-time decoding in C++.",
        "Deployed the system on Raspberry Pi and connected heaters and fans for voice commands and closed-loop temperature regulation.",
        "In 2025, developed a C++ / Qt cross-platform UI and integrated the OpenAI API for natural-language understanding and multi-turn conversation.",
        "Integrated and tuned the hardware and software, and shared parts of the development process in technical videos."
      ],
      "cardTags": [
        "Kaldi",
        "C++ / Qt",
        "Raspberry Pi",
        "Voice interaction"
      ],
      "scope": ""
    },
    "cardTags": [
      "Kaldi",
      "C++ / Qt",
      "树莓派",
      "语音交互"
    ],
    "featured": false,
    "resources": [],
    "scope": ""
  },
  "poultry": {
    "key": "poultry",
    "category": "embedded",
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
    "content": [
      "采集并标注约 8,000 张鸡只图像，基于 YOLOv5 训练行为与健康状态识别模型。",
      "将模型部署到 RK3588，接收树莓派与 ESP32 采集系统的摄像头图像进行推理。",
      "通过 MQTT 将识别结果和设备状态上传至阿里云 IoT。",
      "使用 IoT Studio 搭建实时监控面板，展示多鸡舍状态与告警信息。"
    ],
    "organization": "other",
    "en": {
      "headline": "A pair of digital eyes for the coop",
      "title": "Vision-Based Poultry Health Monitoring",
      "meta": "Edge vision · National final bronze award",
      "time": "Jun — Aug 2023",
      "hint": "How is the flock doing today?",
      "tags": [
        "YOLOv5",
        "RK3588",
        "ESP32",
        "MQTT"
      ],
      "summary": "Chickens do not send status reports, so cameras lend a hand. From image labeling and model training to edge inference and a cloud dashboard, this project turns a glance into the coop into a data pipeline.",
      "intro": "Observing a flock matters, but much of it is repetitive. This project used visual recognition of behavior and health-related states, connecting on-site images to a cloud dashboard.",
      "content": [
        "Collected and labeled about 8,000 chicken images and trained a YOLOv5-based behavior and health-state model.",
        "Deployed inference on RK3588, receiving images from a Raspberry Pi and ESP32 collection system.",
        "Published recognition results and device status to Alibaba Cloud IoT over MQTT.",
        "Built an IoT Studio dashboard for multiple coops, live status, and alert information."
      ],
      "cardTags": [
        "YOLOv5",
        "RK3588",
        "ESP32",
        "MQTT"
      ],
      "scope": ""
    },
    "cardTags": [
      "YOLOv5",
      "RK3588",
      "ESP32",
      "MQTT"
    ],
    "featured": false,
    "resources": [],
    "scope": ""
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
    "content": [
      "建立 2026 腾讯广告算法竞赛项目，团队记录为 Nat & Eason。",
      "仓库已有数据目录与测试代码，作为分析与实验的工作空间。",
      "当前可展示内容以项目方向、工作空间和团队协作为主。"
    ],
    "organization": "other",
    "en": {
      "headline": "New questions, one teammate",
      "title": "2026 Tencent Advertising Algorithm Competition",
      "meta": "Algorithm exploration · Nat & Eason",
      "time": "2026",
      "hint": "A fresh problem. Let’s start a round.",
      "tags": [
        "Algorithm competition",
        "Teamwork",
        "Experiments"
      ],
      "summary": "Another way to stay curious. Together with Nat, I set up an advertising-algorithm competition workspace, making room for analysis, experiments, and a new problem worth thinking about.",
      "intro": "A competition exploration with a teammate. Compared with the hardware projects that already have extensive records, this one is closer to a freshly opened notebook: establish a workspace, then gradually fill it with analysis and experiments.",
      "content": [
        "Established the 2026 Tencent advertising competition project with the team recorded as Nat & Eason.",
        "The repository contains data directories and test code as an analysis and experiment workspace.",
        "Current material supports presenting the project direction, workspace, and collaboration."
      ],
      "cardTags": [
        "Algorithm competition",
        "Teamwork",
        "Experiments"
      ],
      "scope": ""
    },
    "cardTags": [
      "算法竞赛",
      "团队协作",
      "实验探索"
    ],
    "featured": false,
    "resources": [],
    "scope": ""
  }
};
const dialog=document.querySelector('#project-dialog');
const UI={
  "s0": {
    "zh": "跳到正文",
    "en": "Skip to content"
  },
  "a1": {
    "zh": "easonyin 主页",
    "en": "easonyin home"
  },
  "a2": {
    "zh": "主导航",
    "en": "Main navigation"
  },
  "s3": {
    "zh": "项目",
    "en": "Projects"
  },
  "s4": {
    "zh": "经历",
    "en": "Experience"
  },
  "s5": {
    "zh": "关于",
    "en": "About"
  },
  "s6": {
    "zh": "保持联系",
    "en": "Say hello"
  },
  "s7": {
    "zh": "保持好奇，",
    "en": "Stay curious,"
  },
  "s8": {
    "zh": "快乐",
    "en": "keep "
  },
  "s9": {
    "zh": "折腾",
    "en": "tinkering"
  },
  "s10": {
    "zh": "你好，我是",
    "en": "Hi, I’m"
  },
  "s11": {
    "zh": "easonyin",
    "en": "Eason"
  },
  "s12": {
    "zh": "华南师大电子信息硕士在读，目前在哈工大（深圳）做 RA。",
    "en": "Master’s student in Electronic Information at SCNU, currently an RA at HIT Shenzhen."
  },
  "s13": {
    "zh": "主要在和机器人、开发板，还有端侧小模型打交道。",
    "en": "Mostly working with robots, embedded boards, and small models at the edge."
  },
  "s14": {
    "zh": "看看我在折腾啥",
    "en": "Explore projects"
  },
  "s15": {
    "zh": "认识一下",
    "en": "A little about me"
  },
  "s16": {
    "zh": "机器人",
    "en": "Robotics"
  },
  "s17": {
    "zh": "具身智能",
    "en": "Embodied AI"
  },
  "s18": {
    "zh": "嵌入式开发",
    "en": "Embedded development"
  },
  "a19": {
    "zh": "以信号、光束和空间网格构成的抽象工程示意图",
    "en": "Abstract engineering illustration with signals, beams, and a spatial grid"
  },
  "a20": {
    "zh": "从信号到系统的抽象示意，非实验数据",
    "en": "Concept illustration from signals to systems, not experimental data"
  },
  "s21": {
    "zh": "好奇心在线，想法正在加载。",
    "en": "Curiosity online. Ideas loading."
  },
  "s22": {
    "zh": "向下探索",
    "en": "Keep exploring"
  },
  "s23": {
    "zh": "把想法，放进真实世界。",
    "en": "Ideas in the real world."
  },
  "s24": {
    "zh": "哈尔滨工业大学（深圳）",
    "en": "Harbin Institute of Technology, Shenzhen"
  },
  "s25": {
    "zh": "科研助理（RA）",
    "en": "Research Assistant (RA)"
  },
  "s26": {
    "zh": "在哈工大（深圳）做 RA，围绕视觉跟踪、自动化测试、嵌入式系统和端侧模型，让软硬件一起跑起来。",
    "en": "As an RA at HIT Shenzhen, I work on visual tracking, automated testing, embedded systems, and edge models—getting software and hardware to work together."
  },
  "s27": {
    "zh": "双光跟踪云台 ↗",
    "en": "Dual-vision gimbal ↗"
  },
  "s28": {
    "zh": "电机测试台 ↗",
    "en": "Motor test bench ↗"
  },
  "s29": {
    "zh": "RM68 移植 ↗",
    "en": "RM68 port ↗"
  },
  "s30": {
    "zh": "Jetson 端侧模型 ↗",
    "en": "Jetson edge models ↗"
  },
  "s31": {
    "zh": "在职",
    "en": "Current"
  },
  "s32": {
    "zh": "2026.07 — 至今",
    "en": "Jul 2026 — Present"
  },
  "s33": {
    "zh": "美团科技有限公司",
    "en": "Meituan"
  },
  "s34": {
    "zh": "算法实习（无人机业务部 / 机器人研究院）",
    "en": "Algorithm Intern · Drone Business / Robotics Institute"
  },
  "s35": {
    "zh": "参与机械臂实时保护、遥操作数据采集与 VLA 验证，让算法和硬件在真实业务场景里配合起来。",
    "en": "Worked on robot-arm protection, teleoperation data collection, and VLA validation, connecting algorithms with hardware in real operating environments."
  },
  "s36": {
    "zh": "机械臂实时保护 ↗",
    "en": "Robot-arm protection ↗"
  },
  "s37": {
    "zh": "VLA 与遥操作采集 ↗",
    "en": "VLA & teleoperation data ↗"
  },
  "s38": {
    "zh": "已结束",
    "en": "Previous"
  },
  "s39": {
    "zh": "我的",
    "en": "My "
  },
  "s40": {
    "zh": "折腾清单",
    "en": "project notebook"
  },
  "s41": {
    "zh": "从机器人控制，到端侧模型部署。",
    "en": "From robot control to models running on devices."
  },
  "s42": {
    "zh": "点开一张卡片，看看我是怎么和它们打交道的。",
    "en": "Open a card for the story behind the project."
  },
  "a43": {
    "zh": "筛选项目",
    "en": "Filter projects"
  },
  "s44": {
    "zh": "全部项目",
    "en": "All projects"
  },
  "s45": {
    "zh": "机器人",
    "en": "Robotics"
  },
  "s46": {
    "zh": "光学成像",
    "en": "Optical imaging"
  },
  "s47": {
    "zh": "嵌入式",
    "en": "Embedded"
  },
  "s48": {
    "zh": "软件与算法",
    "en": "Software & algorithms"
  },
  "s49": {
    "zh": "小图负责讲个大概，展开看过程和进展。图形与示意曲线均不是实验原始数据。",
    "en": "Illustrations show the idea. Open a card for the process and progress; diagrams and sketch curves are not raw experimental data."
  },
  "s50": {
    "zh": "Eason",
    "en": "Eason"
  },
  "s51": {
    "zh": "机器人 · 具身智能 · 嵌入式开发 · 模型推理部署",
    "en": "Robotics · Embodied AI · Embedded development · Model inference & deployment"
  },
  "s52": {
    "zh": "教育背景",
    "en": "Education"
  },
  "s53": {
    "zh": "2025.09 — 2028.06（预计）",
    "en": "Sep 2025 — Jun 2028 (expected)"
  },
  "s54": {
    "zh": "华南师范大学",
    "en": "South China Normal University"
  },
  "s55": {
    "zh": "电子信息 · 专业硕士在读",
    "en": "Master’s in Electronic Information · In progress"
  },
  "s56": {
    "zh": "武汉轻工大学",
    "en": "Wuhan Polytechnic University"
  },
  "s57": {
    "zh": "自动化 · 本科",
    "en": "Bachelor’s in Automation"
  },
  "s58": {
    "zh": "关于 Eason",
    "en": "About Eason"
  },
  "s59": {
    "zh": "硬件也得",
    "en": "Hardware should "
  },
  "s60": {
    "zh": "听话。",
    "en": "listen, too."
  },
  "s61": {
    "zh": "你好，我是 easonyin，也可以叫我 Eason。本科读自动化，现在是华南师大电子信息专业的硕士生。喜欢把一个“能不能做”的想法，变成设备上真正跑起来的东西。",
    "en": "Hi, I’m easonyin—Eason works too. I studied Automation and am now pursuing a master’s in Electronic Information at SCNU. I like turning “could we build this?” into something that actually runs on a device."
  },
  "s62": {
    "zh": "2026 年 7 月起，我在哈工大（深圳）做科研助理（RA），参与双光跟踪云台、电机桨叶测试台、RM68 移植和 Jetson Orin 端侧模型测试。此前在美团做算法实习，参与机械臂保护、遥操作数据采集与 VLA 验证。",
    "en": "Since July 2026, I’ve been an RA at HIT Shenzhen, working on dual-vision tracking, motor testing, the RM68 port, and Jetson Orin model evaluation. Previously, I interned at Meituan on robot-arm protection, teleoperation data collection, and VLA validation."
  },
  "s63": {
    "zh": "现在更关注机器人与具身智能、嵌入式开发，以及模型量化、推理和部署。喜欢拆问题、做小验证，再把它们接成完整系统；跑通之后，也记得把结果记下来。",
    "en": "My current focus is robotics and embodied AI, embedded development, and model quantization, inference, and deployment. I break problems into small experiments, connect the pieces into a system, and keep a record of what works."
  },
  "s64": {
    "zh": "嵌入式系统",
    "en": "Embedded systems"
  },
  "s65": {
    "zh": "软件与工具",
    "en": "Software & tools"
  },
  "s66": {
    "zh": "推理与部署",
    "en": "Inference & deployment"
  },
  "s67": {
    "zh": "控制与感知",
    "en": "Control & perception"
  },
  "s68": {
    "zh": "视觉跟踪 · 姿态估计 · PID · IMU 融合 · 系统联调",
    "en": "Visual tracking · Pose estimation · PID · IMU fusion · System integration"
  },
  "s69": {
    "zh": "连接与通信",
    "en": "Connectivity"
  },
  "s70": {
    "zh": "机器人与具身智能",
    "en": "Robotics & embodied AI"
  },
  "s71": {
    "zh": "VLA · 遥操作采集 · ByteTrack · 任务规划能力测试",
    "en": "VLA · Teleoperation data · ByteTrack · Task-planning evaluation"
  },
  "s72": {
    "zh": "动手做事的三个步骤",
    "en": "How I work"
  },
  "s73": {
    "zh": "先问个为什么",
    "en": "Start with a why"
  },
  "s74": {
    "zh": "先理清要解决的问题，再翻资料、画草图，找到一个可以动手的入口。",
    "en": "Get clear on the problem, read, sketch, and find a practical starting point."
  },
  "s75": {
    "zh": "动手试一小步",
    "en": "Build one small step"
  },
  "s76": {
    "zh": "先把最小的一段跑通：读到数据、完成一次推理，或者让设备按预期动一下。",
    "en": "Get one small piece working: read some data, run inference, or make a device move as intended."
  },
  "s77": {
    "zh": "再看看，真行吗",
    "en": "Then ask: does it hold up?"
  },
  "s78": {
    "zh": "换些条件再试一遍，记下结果和边界，让下一次迭代有迹可循。",
    "en": "Try different conditions and record the results and limits, so the next iteration has something to build on."
  },
  "s79": {
    "zh": "保持联系",
    "en": "Get in touch"
  },
  "s80": {
    "zh": "来，聊两句",
    "en": "Let’s talk"
  },
  "s81": {
    "zh": "机器人、具身智能、开发板、模型部署，或者只是聊聊最近在折腾什么，都欢迎。",
    "en": "Robotics, embodied AI, embedded boards, model deployment—or just what you’ve been tinkering with lately. Say hello."
  },
  "s82": {
    "zh": "打个招呼",
    "en": "Say hello"
  },
  "s83": {
    "zh": "复制主页链接",
    "en": "Copy site link"
  },
  "s84": {
    "zh": "© 2026 easonyin · 个人项目集",
    "en": "© 2026 easonyin · Personal portfolio"
  },
  "s85": {
    "zh": "回到顶部 ↑",
    "en": "Back to top ↑"
  },
  "a86": {
    "zh": "关闭项目详情",
    "en": "Close project details"
  },
  "s87": {
    "zh": "这次想搞定什么？",
    "en": "What is the goal?"
  },
  "s88": {
    "zh": "开发要点",
    "en": "Development notes"
  },
  "s89": {
    "zh": "折腾下来的一点感受",
    "en": "A few things I learned"
  },
  "s90": {
    "zh": "现在的进度条",
    "en": "Where it stands"
  },
  "s91": {
    "zh": "项目与公开记录整理于 2026 年 10 月；实验指标以对应测试条件为准。",
    "en": "Compiled from project and public records in October 2026; experimental figures apply to the stated test conditions."
  },
  "s92": {
    "zh": "继续看看其他项目 ↗",
    "en": "Explore another project ↗"
  },
  "s93": {
    "zh": "模型推理部署",
    "en": "Model inference & deployment"
  }
};
let language='zh';
let activeProject=null;
const copyText={
 zh:{open:'展开看看',openPrefix:'展开：',homeTitle:'easonyin — 保持好奇，快乐折腾。',description:'easonyin，华南师大电子信息硕士在读，目前在哈工大（深圳）做 RA。关注机器人、具身智能、嵌入式开发与模型推理部署。',copied:'链接已复制！把这份折腾传出去 ↗',copyFallback:'请复制浏览器地址栏中的主页链接。',hitsz:'HITSZ · RA 项目',meituan:'美团 · 实习项目'},
 en:{open:'Explore the story',openPrefix:'Open: ',homeTitle:'easonyin — Stay curious. Keep tinkering.',description:'Eason (easonyin), master’s student in Electronic Information at SCNU and RA at HIT Shenzhen. Robotics, embodied AI, embedded development, and model inference and deployment.',copied:'Link copied. Pass the tinkering along ↗',copyFallback:'Please copy the site URL from your browser’s address bar.',hitsz:'HITSZ · RA project',meituan:'Meituan · Internship project'}
};
function projectInLanguage(key){return language==='en'?{...projects[key],...projects[key].en}:projects[key]}
function tagElements(tags){return tags.map(text=>{const el=document.createElement('span');el.textContent=text;return el})}
function textAndArrow(text){const label=document.createElement('span');label.className='title-text';label.textContent=text;const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');return[label,arrow]}
function resourceElements(resources){return resources.map(r=>{const a=document.createElement('a');a.href=r.url;a.target='_blank';a.rel='noopener noreferrer';a.append(...textAndArrow(r[language]));return a})}
function renderCards(){
 const words=copyText[language];
 for(const card of document.querySelectorAll('.project')){
  const key=card.id.slice('project-'.length),p=projectInLanguage(key);
  card.querySelector('.project-title').replaceChildren(...textAndArrow(p.headline));
  card.querySelector('.project-name').textContent=p.title;
  card.querySelector('.project-meta span:first-child').textContent=p.meta;
  card.querySelector('.project-meta span:last-child').textContent=p.time;
  card.querySelector('.visual-bottom>span:first-child').textContent=p.hint;
  card.querySelector(':scope>p').textContent=p.summary;
  card.querySelector('.tags').replaceChildren(...tagElements(p.cardTags));
  card.querySelector('.project-resources').replaceChildren(...resourceElements(p.resources.slice(0,1)));
  card.querySelector('.project-resources').hidden=!p.resources.length;
  const affiliation=card.querySelector('.project-affiliation');
  if(affiliation)affiliation.textContent=words[projects[key].organization];
  const visual=card.querySelector('.project-visual'),more=card.querySelector('.project-more');
  visual.setAttribute('aria-label',words.openPrefix+p.title);
  more.replaceChildren(...textAndArrow(words.open));
  more.setAttribute('aria-label',words.openPrefix+p.title);
 }
}
function renderDialog(){
 if(!activeProject)return;
 const p=projectInLanguage(activeProject);
 document.querySelector('#dialog-kicker').textContent=p.label;
 document.querySelector('#dialog-title').textContent=p.title;
 document.querySelector('#dialog-intro').textContent=p.intro;
 const scope=document.querySelector('#dialog-scope');scope.textContent=p.scope;scope.hidden=!p.scope;
 document.querySelector('#dialog-tags').replaceChildren(...tagElements(p.tags));
 document.querySelector('#dialog-content').replaceChildren(...p.content.map(text=>{const el=document.createElement('li');el.textContent=text;return el}));
 document.querySelector('#dialog-resource-links').replaceChildren(...resourceElements(p.resources));
 document.querySelector('.dialog-resources').hidden=!p.resources.length;
}
function setLanguage(next,{save=true,updateURL=true}={}){
 language=next==='en'?'en':'zh';
 document.documentElement.lang=language==='en'?'en':'zh-CN';
 document.documentElement.dataset.language=language;
 document.title=copyText[language].homeTitle;
 document.querySelector('meta[name="description"]').content=copyText[language].description;
 const ogTitle=document.querySelector('meta[property="og:title"]'),ogDescription=document.querySelector('meta[property="og:description"]'),ogLocale=document.querySelector('meta[property="og:locale"]');
 if(ogTitle)ogTitle.content=copyText[language].homeTitle;
 if(ogDescription)ogDescription.content=copyText[language].description;
 if(ogLocale)ogLocale.content=language==='en'?'en_US':'zh_CN';
 document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=UI[el.dataset.i18n][language]);
 document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',UI[el.dataset.i18nAria][language]));
 document.querySelectorAll('[data-inline-zh]').forEach(el=>el.textContent=language==='en'?el.dataset.inlineEn:el.dataset.inlineZh);
 document.querySelectorAll('[data-lang]').forEach(button=>{const selected=button.dataset.lang===language;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected))});
 renderCards();if(dialog.open)renderDialog();
 if(save){try{localStorage.setItem('easonyin-language',language)}catch{}}
 if(updateURL){const url=new URL(location.href);if(language==='en')url.searchParams.set('lang','en');else url.searchParams.delete('lang');history.replaceState(null,'',url)}
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
 activeProject=button.dataset.project;renderDialog();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');
}));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close()});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');activeProject=null});
function applyProjectFilter(filter){
 document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b.dataset.filter===filter;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});
 document.querySelectorAll('.project').forEach(card=>card.hidden=filter==='featured'?card.dataset.featured!=='true':filter!=='all'&&card.dataset.category!==filter);
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>applyProjectFilter(button.dataset.filter)));
window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#project-'))applyProjectFilter('all')});
document.querySelectorAll('[data-experience-project]').forEach(link=>link.addEventListener('click',()=>document.querySelector('[data-filter="all"]').click()));
let toastTimeout;
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),3200)}
document.querySelector('#share-link').addEventListener('click',async()=>{
 const url=location.origin+location.pathname+(language==='en'?'?lang=en':'');
 try{await navigator.clipboard.writeText(url);toast(copyText[language].copied)}catch{
  const text=document.createElement('textarea');text.value=url;text.style.cssText='position:fixed;left:-9999px';document.body.append(text);text.select();
  try{if(!document.execCommand('copy'))throw Error();toast(copyText[language].copied)}catch{toast(copyText[language].copyFallback)}text.remove();
 }
});
const requestedLanguage=new URLSearchParams(location.search).get('lang');
let savedLanguage;try{savedLanguage=localStorage.getItem('easonyin-language')}catch{}
setLanguage(requestedLanguage==='zh'||requestedLanguage==='en'?requestedLanguage:savedLanguage,{save:false,updateURL:false});

applyProjectFilter(location.hash.startsWith('#project-')?'all':'featured');
