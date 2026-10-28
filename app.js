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
      "MaixCAM2",
      "C++",
      "RGB + Thermal",
      "ByteTrack"
    ],
    "summary": "把 RGB 视觉、热成像和双轴云台接在一起，让设备看得见人，也能持续跟着看。",
    "intro": "把 RGB 视觉、热成像和双轴云台接在一起，让设备看得见人，也能持续跟着看。",
    "content": [
      "基于 MaixCAM2 开发双光跟踪原型，持续迭代 C++ 系统。",
      "结合人体姿态、目标关联与热像复核，衔接感知和控制。",
      "围绕遮挡恢复、时序与跟随稳定性开展联调。"
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
        "MaixCAM2",
        "C++",
        "RGB + Thermal",
        "ByteTrack"
      ],
      "summary": "Connecting RGB vision, thermal imaging, and a two-axis gimbal to detect and keep following people.",
      "intro": "Connecting RGB vision, thermal imaging, and a two-axis gimbal to detect and keep following people.",
      "content": [
        "Developed a MaixCAM2 dual-vision tracking prototype, with ongoing C++ iteration.",
        "Connected pose estimation, target association, thermal checks, and control.",
        "Worked on occlusion recovery, timing, and stable following."
      ],
      "affiliation": "HIT Shenzhen · Research assistant project",
      "cardTags": [
        "MaixCAM2",
        "C++",
        "RGB + Thermal",
        "ByteTrack",
        "IMU"
      ]
    },
    "cardTags": [
      "MaixCAM2",
      "C++",
      "RGB + Thermal",
      "ByteTrack",
      "IMU"
    ],
    "featured": true,
    "resources": []
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
    "summary": "把调档、读表、记数据和画曲线串起来，让电机桨叶测试少一些重复操作。",
    "intro": "把调档、读表、记数据和画曲线串起来，让电机桨叶测试少一些重复操作。",
    "content": [
      "联通 PX4 控制、相机读表与桌面测试流程。",
      "支持历史回放、失败续测和结果导出。",
      "整理 Windows 运行包与操作文档，代码已公开。"
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
      "summary": "Bringing output control, instrument reading, data logging, and curves into one motor-testing workflow.",
      "intro": "Bringing output control, instrument reading, data logging, and curves into one motor-testing workflow.",
      "content": [
        "Integrated PX4 control, camera-based instrument reading, and desktop testing.",
        "Added historical replay, resumable runs, and result exports.",
        "Prepared a Windows distribution and operating docs; the code is public."
      ],
      "affiliation": "HIT Shenzhen · Research assistant project",
      "cardTags": [
        "Python",
        "PX4",
        "Computer vision",
        "Windows"
      ]
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
    ]
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
    "summary": "给 RM68 换上 ImmortalWrt，从启动、联网到管理页面，一点点打通。",
    "intro": "给 RM68 换上 ImmortalWrt，从启动、联网到管理页面，一点点打通。",
    "content": [
      "推进设备适配、持久启动与双频 AP 联调。",
      "开发轻量管理页，支持配置与未确认修改恢复。",
      "已完成单机验证，多节点 mesh 仍待测试。"
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
        "Embedded"
      ],
      "summary": "Bringing ImmortalWrt to the RM68, from boot and connectivity to a small management UI.",
      "intro": "Bringing ImmortalWrt to the RM68, from boot and connectivity to a small management UI.",
      "content": [
        "Worked on device adaptation, persistent boot, and dual-band AP integration.",
        "Built a lightweight configuration UI with unconfirmed-change rollback.",
        "Single-node checks are complete; multi-node mesh remains to be tested."
      ],
      "affiliation": "HIT Shenzhen · Research assistant project",
      "cardTags": [
        "ImmortalWrt",
        "Linux",
        "802.11s",
        "Embedded"
      ]
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
    ]
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
      "推理加速"
    ],
    "summary": "把小参数模型搬进 Jetson Orin，探索有限算力下的推理和任务规划。",
    "intro": "把小参数模型搬进 Jetson Orin，探索有限算力下的推理和任务规划。",
    "content": [
      "开展模型量化、推理加速与设备部署。",
      "整理统一的任务规划测试流程。",
      "持续比较资源占用与任务表现。"
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
        "Inference acceleration"
      ],
      "summary": "Exploring inference and task planning with small models on a resource-constrained Jetson Orin.",
      "intro": "Exploring inference and task planning with small models on a resource-constrained Jetson Orin.",
      "content": [
        "Worked on model quantization, inference acceleration, and device deployment.",
        "Organized a consistent task-planning evaluation workflow.",
        "Continued exploring resource usage and task performance."
      ],
      "affiliation": "HIT Shenzhen · Research assistant project",
      "cardTags": [
        "Jetson Orin",
        "Edge LLMs",
        "Quantization",
        "Inference acceleration",
        "Model deployment",
        "Standardized evaluation"
      ]
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
    "resources": []
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
    "summary": "给机械臂的力矩信号加一位“观察员”，让它更及时地发现异常。",
    "intro": "给机械臂的力矩信号加一位“观察员”，让它更及时地发现异常。",
    "content": [
      "参与实时力矩异常检测与动态阈值开发。",
      "结合滤波和滑动窗口，联调保护决策链路。",
      "在配餐柜实机上开展调参与设计验证。"
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
      "summary": "Watching robot-arm torque signals to help the system spot anomalies sooner.",
      "intro": "Watching robot-arm torque signals to help the system spot anomalies sooner.",
      "content": [
        "Worked on real-time torque anomaly detection and dynamic thresholds.",
        "Integrated filtering, sliding windows, and protection decisions.",
        "Tuned and validated the workflow on meal-cabinet hardware."
      ],
      "affiliation": "Meituan · Internship project",
      "cardTags": [
        "Isolation Forest",
        "Anomaly detection",
        "Real-time control"
      ]
    },
    "affiliation": "美团 · 实习项目",
    "cardTags": [
      "Isolation Forest",
      "异常检测",
      "实时控制"
    ],
    "featured": true,
    "resources": []
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
    "summary": "从遥操作示范到可用训练数据，参与机器人采集平台和 VLA 实验。",
    "intro": "从遥操作示范到可用训练数据，参与机器人采集平台和 VLA 实验。",
    "content": [
      "参与机械臂、SpaceMouse 与 RealSense 采集链路集成。",
      "整理动作与视觉数据的质量检查和筛选流程。",
      "参与 VLA 微调与策略验证，相关成果发表于 ICRA 2026，第二作者。"
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
      "summary": "From teleoperated demonstrations to usable training data: capture tools and VLA experiments.",
      "intro": "From teleoperated demonstrations to usable training data: capture tools and VLA experiments.",
      "content": [
        "Integrated robot-arm, SpaceMouse, and RealSense capture workflows.",
        "Worked on quality checks and screening for action/vision data.",
        "Contributed to VLA fine-tuning and policy validation; second author on related ICRA 2026 work."
      ],
      "affiliation": "Meituan · Internship project",
      "cardTags": [
        "VLA",
        "SpaceMouse",
        "RealSense",
        "Policy distillation"
      ]
    },
    "affiliation": "美团 · 实习项目",
    "cardTags": [
      "VLA",
      "SpaceMouse",
      "RealSense",
      "策略蒸馏"
    ],
    "featured": true,
    "resources": []
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
    "summary": "从 FPGA 扫描到 AOD 多频编码，探索光、信号与采集之间的配合。",
    "intro": "从 FPGA 扫描到 AOD 多频编码，探索光、信号与采集之间的配合。",
    "content": [
      "开展扫描控制与多频信号相关实验。",
      "联调信号源、采集设备与分析流程。",
      "当前以电学与频域验证为主，继续推进成像链路。"
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
      "summary": "Exploring how light, signals, and acquisition work together, from FPGA scanning to AOD multi-tone encoding.",
      "intro": "Exploring how light, signals, and acquisition work together, from FPGA scanning to AOD multi-tone encoding.",
      "content": [
        "Worked on scanning control and multi-tone signal experiments.",
        "Integrated signal generation, acquisition devices, and analysis.",
        "Current work focuses on electrical/frequency-domain validation and the imaging chain."
      ],
      "cardTags": [
        "AOD",
        "FPGA / MEMS",
        "AD9910",
        "FFT"
      ]
    },
    "cardTags": [
      "AOD",
      "FPGA / MEMS",
      "AD9910",
      "FFT"
    ],
    "featured": false,
    "resources": []
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
    "summary": "从语音控制温度的小系统起步，再加上界面和自然语言对话。",
    "intro": "从语音控制温度的小系统起步，再加上界面和自然语言对话。",
    "content": [
      "训练语音模型，用 C++ 做实时解码。",
      "在树莓派上连接外设与温度闭环控制。",
      "后续加入 Qt 界面和多轮对话。"
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
      "summary": "Starting with voice-controlled temperature regulation, then adding a UI and natural-language conversation.",
      "intro": "Starting with voice-controlled temperature regulation, then adding a UI and natural-language conversation.",
      "content": [
        "Trained speech models and implemented real-time C++ decoding.",
        "Connected Raspberry Pi peripherals and temperature feedback control.",
        "Later added a Qt UI and multi-turn dialogue."
      ],
      "cardTags": [
        "Kaldi",
        "C++ / Qt",
        "Raspberry Pi",
        "Voice interaction"
      ]
    },
    "cardTags": [
      "Kaldi",
      "C++ / Qt",
      "树莓派",
      "语音交互"
    ],
    "featured": false,
    "resources": []
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
    "summary": "从摄像头到边缘推理和云端看板，给鸡舍装上一双“电子眼”。",
    "intro": "从摄像头到边缘推理和云端看板，给鸡舍装上一双“电子眼”。",
    "content": [
      "参与图像采集、标注与模型训练。",
      "在 RK3588 上部署识别，通过 MQTT 上传结果。",
      "完成云端看板联调，获计算机大赛决赛铜奖。"
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
      "summary": "Connecting cameras, edge inference, and a cloud dashboard to keep an eye on the flock.",
      "intro": "Connecting cameras, edge inference, and a cloud dashboard to keep an eye on the flock.",
      "content": [
        "Worked on image collection, labeling, and model training.",
        "Deployed recognition on RK3588 with MQTT result upload.",
        "Integrated the cloud dashboard; earned a computing-contest final bronze award."
      ],
      "cardTags": [
        "YOLOv5",
        "RK3588",
        "ESP32",
        "MQTT"
      ]
    },
    "cardTags": [
      "YOLOv5",
      "RK3588",
      "ESP32",
      "MQTT"
    ],
    "featured": false,
    "resources": []
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
    "summary": "和 Nat 一起探索广告算法竞赛，给新的问题和实验留个位置。",
    "intro": "和 Nat 一起探索广告算法竞赛，给新的问题和实验留个位置。",
    "content": [
      "建立竞赛协作空间。",
      "开展问题分析与初步实验准备。"
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
      "summary": "Exploring an advertising-algorithm competition with Nat, with room for new questions and experiments.",
      "intro": "Exploring an advertising-algorithm competition with Nat, with room for new questions and experiments.",
      "content": [
        "Set up a shared competition workspace.",
        "Started problem analysis and initial experiment preparation."
      ],
      "cardTags": [
        "Algorithm competition",
        "Teamwork",
        "Experiments"
      ]
    },
    "cardTags": [
      "算法竞赛",
      "团队协作",
      "实验探索"
    ],
    "featured": false,
    "resources": []
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
    "zh": "点开看看项目，或者到 GitHub 继续逛逛。",
    "en": "Open a project for a quick look, or explore the code on GitHub."
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
