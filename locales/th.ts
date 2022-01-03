const th = {
  translation: {
    utils: {
      randomConfirm: "สุ่มได้ {{option}}\nคุณชอบตัวเลือกนี้หรือไม่",
      menuText: "รายการ",
    },
    login: {
      title: "ลงชื่อเข้าใช้",
      description: "ลงชื่อเข้าใช้ Random Me หรือ ดำเนินการต่อเป็นผู้ใช้ทั่วไป",
      emptyUsernameAlert: "กรุณากรอกชื่อผู้ใช้ของคุณ",
      emptyPasswordAlert: "กรุณากรอกรหัสผ่านของคุณ",
      username: "ชื่อผู้ใช้",
      password: "รหัสผ่าน",
      forgotPassword: "ลืมรหัสผ่าน?",
      register: "ลงทะเบียน",
      orLoginWith: "หรือลงชื่อเข้าใช้ด้วย",
      srOnlyWithGoogle: "ลงชื่อเข้าใช้ด้วย Google",
      srOnlyWithFacebook: "ลงชื่อเข้าใช้ด้วย Facebook",
      or: "หรือ",
      continueAsGuest: "ดำเนินการต่อแบบผู้ใช้ทั่วไป",
      login: "ลงชื่อเข้าใช้",
    },
    register: {
      title: "ลงทะเบียน",
      description: "ลงทะเบียนกับ Random Me",
      emptyUsernameAlert: "กรุณากรอกชื่อผู้ใช้ของคุณ",
      emptyPasswordAlert: "กรุณากรอกรหัสผ่านของคุณ",
      emptyConfirmPasswordAlert: "กรุณากรอกรหัสผ่านอีกครั้ง",
      emptyEmailAlert: "กรุณากรอกอีเมลของคุณ",
      passwordConfirmAlert: "รหัสผ่านไม่ตรงกัน",
      usernameExamplePlaceholder: "ตัวอย่าง johndoe",
      emailExamplePlaceholder: "ตัวอย่าง johndoe@example.com",
      passwordExamplePlaceholder: "ตัวอย่าง password123",
      passwordConfirmExamplePlaceholder: "password123",
    },
    home: {
      title: "สุ่ม",
      description: "มาสุ่มชะตาชีวิตของเราด้วย Random Me กันเถอะ",
      topics: "หัวข้อ",
      "add option": "เพิ่มตัวเลือก",
      policy: "วิธีสุ่ม",
      "see probabilities": "ดูความน่าจะเป็น",
      probability: "ความน่าจะเป็น",
      option: "ตัวเลือก",
      noTopics: "ยังไม่มีหัวข้อ<em>ที่มีตัวเลือก</em>เลย<br />เพิ่มสิ",
    },
    topics: {
      title: "หัวข้อ",
      description: "ดูหัวข้อทั้งหมดและตัวเลือกที่คุณสามารถเลือกได้จากที่นี่",
      editTopicNamePrompt: "ใส่ชื่อหัวข้อใหม่",
      addTopicPlaceholder: "เพิ่มหัวข้อ",
      editWeightPrompt: "ใส่ค่าน้ำหนักใหม่",
      biasOutOfRange: "กรุณาใส่ตัวเลขระหว่าง {{min}} และ {{max}}",
      editOptionNamePrompt: "ใส่ชื่อตัวเลือกใหม่",
      options: "ตัวเลือก",
      bias: "น้ำหนัก",
      addOptionPlaceholder: "เพิ่มตัวเลือก",
    },
    account: {
      title: "บัญชี",
      description: "คุณสามารถสร้างบัญชีได้ที่นี่",
      resetPassword: "รีเซ็ตรหัสผ่าน",
    },
    policies: {
      title: "วิธีการสุ่ม",
      description: "ข้อมูลเกี่ยวกับวิธีการสุ่มของ Random Me วิธีต่างๆ",
      intro:
        "ใน Random Me แอพ คุณสามารถเลือกวิธีสุ่มต่างๆ ได้ ดังนี้ <em>Equal Weight</em>, <em>Epsilon Greedy</em>, <em>Multinomial</em>, <em>Randomize</em>, <em>Softmax</em> และ <em>UCB1</em>",
      motivation: "แรงจูงใจ",
      motivationText:
        "แอพ <strong>Random Me</strong> เป็นโปรเจกท์ที่ได้แรงบันดาลใจมาจากปัญหา Multi-armed bandit โดยมีเป้าหมายเพื่อช่วยเหลือคนที่ต้องมาทุกข์ทรมานกับการที่ไม่รู้ว่าจะต้องเลือกอะไรดีจากตัวเลือกที่มีอยู่ ต้วอย่างเช่น หากว่าคุณไม่รู้ว่าจะทำอะไรดีในเวลาว่างหรือจะเล่นเกมอะไรดี Random Me สามารถสุ่มเลือกให้คุณได้นั่นเอง",
      basicPolicies: "วิธีการสุ่มทั่วไป",
      multinomialText:
        "วิธีการสุ่มแบบ Multinomial ทำการเลือกตัวเลือกโดยดูที่<em>น้ำหนัก</em>ของแต่ละตัวเลือก คุณสามารถปรับน้ำหนักได้ใน",
      topicsPage: "หน้าหัวข้อ",
      multinomialText2:
        " ค่าน้ำหนักเป็นจำนวนเต็มที่มีค่าตั้งแต่ 1 ถึง 10 ยิ่งค่าน้ำหนักสู่งเท่าใด ความน่าจะเป็นที่จะสุ่มได้ตัวเลือกนั้นก็จะมาขึ้นเท่านั้น ตัวอย่างเข่น ถ้าคุณมี 3 ตัวเลือกที่มีค่าน้ำหนัก 1, 1, 5 ซึ่งรวมกันได้ 7 แล้วความน่าจะเป็นที่จะสุ่มได้ตัวเลือกทั้ง 3 คือ 1/7, 1/7, และ 5/7 ตามลำดับ",
      equalWeightText:
        "ความน่าจะเป็นของแต่ละตัวเลือกมีค่าเท่ากัน ตัวอย่างเช่น ถ้าคุณมี 3 ตัวเลือก แล้วความน่าจะเป็นที่จะสุ่มได้แต่ละตัวเลือกมีค่า 1/3 เท่ากัน",
      randomizeText:
        "วิธีเลือกแบบ Randomize ทำการเลือกตัวเลือกแบบสุ่ม ซึ่งไม่ได้มีกฎเกณฑ์ในการสุ่มใดๆ ทั้งสิ้น",
      advancedPolicies: "วิธีการสุ่มขั้นสูง",
      advancedPoliciesText:
        'วิธีการสุ่มต่อไปนี้เป็นวิธีการสุ่มที่ใช้ในปัญหา <a class="underline font-medium" href="https://en.wikipedia.org/wiki/Multi-armed_bandit#The_multi-armed_bandit_model" target="_blank" rel="noreferrer">Multi-armed bandit</a> โดยสรุปคือ Multi-armed bandit จะสุ่มเพื่อเลือกตัวเลือกที่ดีที่สุดออกมา เมื่อทำการสุ่มหลายๆ ครั้งผ่านไป',
      advancedPoliciesText2:
        "ในโมเดลล์ Multi-armed bandit จะแบ่งออกเป็น 2 ขั้นตอน คือ exploration (การสำรวจ) และ exploitation (การหากำไร) ช่วง exploration จะทำการสุ่มในรูปแบบที่ค่อนข้างมั่วเพื่อค้นหาว่าตัวเลือกใดที่ดี ช่วง exploitation จะทำการเลือกตัวเลือกที่ดีที่สุดออกมาจากประสบการณ์ที่หามาได้จากช่วง exploration สำหรับแต่ละวิธีสุ่มจะทำตัวได้ทั้งแบบ exploration และ exploitation ขึ้นอยู่กับ parameter ค่างๆ ที่กำหนดให้ใน algorithm ของมัน",
      ucb1Text:
        "แทนที่จะทำการ explore โดยใช้การสุ่มมั่วๆ UCB1 ทำการสลับขั้นตอนระหว่าง exploration และ exploitation เมื่อมันทำการสุ่มไปเรื่อยๆ ทำการเปลี่ยนจากการที่จอจ่ออยู่กับการ explore ไปที่ตัวเลือกที่ไม่ค่อยจะถูกสุ่มออกไป ไปหาขั้นการ exploit โดยเลือกตัวเลือกที่มี <strong>reward</strong> มากที่สุด",
      ucb1Text2:
        "reward ที่มีค่าเป็น <em>1</em> ได้มาจาก<strong>การที่คุณตอบ Random Me ว่าชอบตัวเลือกที่สุ่มออกมาได้</strong> หากว่าไม่ชอบจะเป็น <em>0</em> ดังนั้นคำตอบของคุณส่งผลต่อการสุ่มในครั้งถัดๆ ไปด้วย โดยการใช้วิธีการสุ่มขั้นสูงเหล่านี้",
      epsilonGreedyText:
        "Epsilon Greedy หรือ <em>&epsilon;-greedy</em> เป็นวิธีการสุ่มที่ทำการ explore ด้วยความน่าจะเป็น <em>1 - &epsilon;</em> โดยใช้วิธีสุ่มแบบ Equal Weight นอกจากนั้นจะทำการ exploit คือเลือกตัวเลือกที่ดีที่สุด",
      softmaxText:
        'Softmax เป็นฟังก์ชันที่ เอิ่ม ไปอ่านเอาที่<a class="underline font-medium" href="https://en.wikipedia.org/wiki/Softmax_function" target="_blank" rel="noopener noreferrer">วิกิพีเดียนี้</a>เองละกันเนอะ',
    },
  },
}

export default th
