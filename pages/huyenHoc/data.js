export const timeIndices = [
  { index: 0, name: "Tý 23:00-01:00", time: "23:00-01:00" },
  { index: 1, name: "Sửu 01:00-03:00", time: "01:00-03:00" },
  { index: 2, name: "Dần 03:00-05:00", time: "03:00-05:00" },
  { index: 3, name: "Mão 05:00-07:00", time: "05:00-07:00" },
  { index: 4, name: "Thìn 07:00-09:00", time: "07:00-09:00" },
  { index: 5, name: "Tỵ 09:00-11:00", time: "09:00-11:00" },
  { index: 6, name: "Ngọ 11:00-13:00", time: "11:00-13:00" },
  { index: 7, name: "Mùi 13:00-15:00", time: "13:00-15:00" },
  { index: 8, name: "Thân 15:00-17:00", time: "15:00-17:00" },
  { index: 9, name: "Dậu 17:00-19:00", time: "17:00-19:00" },
  { index: 10, name: "Tuất 19:00-21:00", time: "19:00-21:00" },
  { index: 11, name: "Hợi 21:00-23:00", time: "21:00-23:00" },
];

// /assets/zodiac/songTu.png
// const basePath = "/assets/zodiac/";
const basePath = "";
export const zodiacMapping = {
  "Cung Bạch Dương": {
    path: basePath + "bachDuong",
  },
  "Cung Kim Ngưu": {
    path: basePath + "kimNguu",
  },
  "Cung Song Tử": {
    path: basePath + "songTu",
  },
  "Cung Cự Giải": {
    path: basePath + "cuGiai",
  },
  "Cung Sư Tử": {
    path: basePath + "suTu",
  },
  "Cung Xử Nữ": {
    path: basePath + "xuNu",
  },
  "Cung Thiên Bình": {
    path: basePath + "thienBinh",
  },
  "Cung Bọ Cạp": {
    path: basePath + "boCap",
  },
  "Cung Thiên Yết": {
    path: basePath + "boCap",
  },
  "Cung Nhân Mã": {
    path: basePath + "nhanMa",
  },
  "Cung Ma Kết": {
    path: basePath + "maKet",
  },
  "Cung Thuỷ Bình": {
    path: basePath + "baoBinh",
  },
  "Cung Thủy Bình": {
    path: basePath + "baoBinh",
  },
  "Cung Bảo Bình": {
    path: basePath + "baoBinh",
  },
  "Cung Song Ngư": {
    path: basePath + "songNgu",
  },
};

export const mockData = {
  "name": "Hoàng Sơn",
  "birthDate": "2021-11-11",
  "lunarDate": "Ngày mùng 7 tháng 10 năm 2〇21",
  "chineseDate": "Tân Sửu - Kỷ Hợi - Quý Hợi - Nhâm Tý",
  "zodiac": "Trâu",
  "sign": "Cung Thiên Yết",
  "fiveElementsClass": "Mộc Tam Cục",
  "soul": "Cự Môn",
  "body": "Thiên Tướng",
  "palaces": [
      {
          "name": "Điền Trạch",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Canh",
          "earthlyBranch": "Dần",
          "majorStars": [
              "Vũ Khúc(Đắc)",
              "Thiên Tướng(Miếu)"
          ],
          "minorStars": [
              "Thiên Việt"
          ],
          "adjectiveStars": [
              "Hồng Loan",
              "Phong Cáo",
              "Thiên Không",
              "Cô Thần"
          ],
          "changsheng12": "Tuyệt",
          "boshi12": "Hỷ Thần",
          "jiangqian12": "Kiếp Sát",
          "suiqian12": "Hối Khí",
          "decadal": {
              "range": [
                  93,
                  102
              ],
              "heavenlyStem": "Canh",
              "earthlyBranch": "Dần"
          },
          "ages": [
              6,
              18,
              30,
              42,
              54,
              66,
              78,
              90,
              102,
              114
          ]
      },
      {
          "name": "Quan Lộc",
          "isBodyPalace": false,
          "isOriginalPalace": true,
          "heavenlyStem": "Tân",
          "earthlyBranch": "Mão",
          "majorStars": [
              "Thái Dương(Miếu)",
              "Thiên Lương(Miếu)"
          ],
          "minorStars": [
              "Hỏa Tinh(Lợi)"
          ],
          "adjectiveStars": [
              "Ân Quang"
          ],
          "changsheng12": "Mộ",
          "boshi12": "Phi Liêm",
          "jiangqian12": "Tai Sát",
          "suiqian12": "Tang Môn",
          "decadal": {
              "range": [
                  83,
                  92
              ],
              "heavenlyStem": "Tân",
              "earthlyBranch": "Mão"
          },
          "ages": [
              5,
              17,
              29,
              41,
              53,
              65,
              77,
              89,
              101,
              113
          ]
      },
      {
          "name": "Nô Bộc",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Nhâm",
          "earthlyBranch": "Thìn",
          "majorStars": [
              "Thất Sát(Miếu)"
          ],
          "minorStars": [
              "Văn Khúc(Đắc)"
          ],
          "adjectiveStars": [
              "Giải Thần",
              "Triệt Lộ",
              "Thiên Thương"
          ],
          "changsheng12": "Tử",
          "boshi12": "Tấu Thư",
          "jiangqian12": "Thiên Sát",
          "suiqian12": "Quán Tác",
          "decadal": {
              "range": [
                  73,
                  82
              ],
              "heavenlyStem": "Nhâm",
              "earthlyBranch": "Thìn"
          },
          "ages": [
              4,
              16,
              28,
              40,
              52,
              64,
              76,
              88,
              100,
              112
          ]
      },
      {
          "name": "Thiên Di",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Quý",
          "earthlyBranch": "Tỵ",
          "majorStars": [
              "Thiên Cơ(Bình)"
          ],
          "minorStars": [],
          "adjectiveStars": [
              "Long Trì",
              "Thiên Phúc",
              "Tuần Không",
              "Không Vong",
              "Thiên Khốc"
          ],
          "changsheng12": "Bệnh",
          "boshi12": "Tướng Quân",
          "jiangqian12": "Chỉ Bối",
          "suiqian12": "Quan Phù",
          "decadal": {
              "range": [
                  63,
                  72
              ],
              "heavenlyStem": "Quý",
              "earthlyBranch": "Tỵ"
          },
          "ages": [
              3,
              15,
              27,
              39,
              51,
              63,
              75,
              87,
              99,
              111
          ]
      },
      {
          "name": "Tật Ách",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Giáp",
          "earthlyBranch": "Ngọ",
          "majorStars": [
              "Tử Vi(Miếu)"
          ],
          "minorStars": [
              "Thiên Khôi"
          ],
          "adjectiveStars": [
              "Hàm Trì",
              "Đài Phụ",
              "Thiên Trù",
              "Thiên Nguyệt",
              "Nguyệt Đức",
              "Thiên Hình",
              "Thiên Sứ"
          ],
          "changsheng12": "Suy",
          "boshi12": "Tiểu Hao",
          "jiangqian12": "Hàm Trì",
          "suiqian12": "Tiểu Hao",
          "decadal": {
              "range": [
                  53,
                  62
              ],
              "heavenlyStem": "Giáp",
              "earthlyBranch": "Ngọ"
          },
          "ages": [
              2,
              14,
              26,
              38,
              50,
              62,
              74,
              86,
              98,
              110
          ]
      },
      {
          "name": "Tài Bạch",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Ất",
          "earthlyBranch": "Mùi",
          "majorStars": [],
          "minorStars": [],
          "adjectiveStars": [
              "Tam Thai",
              "Bát Tọa",
              "Thiên Hư"
          ],
          "changsheng12": "Đế Vượng",
          "boshi12": "Thanh Long",
          "jiangqian12": "Nguyệt Sát",
          "suiqian12": "Đại Hao",
          "decadal": {
              "range": [
                  43,
                  52
              ],
              "heavenlyStem": "Ất",
              "earthlyBranch": "Mùi"
          },
          "ages": [
              1,
              13,
              25,
              37,
              49,
              61,
              73,
              85,
              97,
              109
          ]
      },
      {
          "name": "Tử Nữ",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Bính",
          "earthlyBranch": "Thân",
          "majorStars": [
              "Phá Quân(Đắc)"
          ],
          "minorStars": [
              "Đà La(Hạn)"
          ],
          "adjectiveStars": [
              "Thiên Hỷ",
              "Thiên Vu",
              "Âm Sát"
          ],
          "changsheng12": "Lâm Quan",
          "boshi12": "Lực Sỹ",
          "jiangqian12": "Vong Thần",
          "suiqian12": "Long Đức",
          "decadal": {
              "range": [
                  33,
                  42
              ],
              "heavenlyStem": "Bính",
              "earthlyBranch": "Thân"
          },
          "ages": [
              12,
              24,
              36,
              48,
              60,
              72,
              84,
              96,
              108,
              120
          ]
      },
      {
          "name": "Phu Thê",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Đinh",
          "earthlyBranch": "Dậu",
          "majorStars": [],
          "minorStars": [
              "Lộc Tồn"
          ],
          "adjectiveStars": [
              "Thiên Quý",
              "Phụng Các",
              "Thiên Quan",
              "Phi Liêm",
              "Niên Giải"
          ],
          "changsheng12": "Quan Đới",
          "boshi12": "Bác Sỹ",
          "jiangqian12": "Tướng Tinh",
          "suiqian12": "Bạch Hổ",
          "decadal": {
              "range": [
                  23,
                  32
              ],
              "heavenlyStem": "Đinh",
              "earthlyBranch": "Dậu"
          },
          "ages": [
              11,
              23,
              35,
              47,
              59,
              71,
              83,
              95,
              107,
              119
          ]
      },
      {
          "name": "Huynh Đệ",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Mậu",
          "earthlyBranch": "Tuất",
          "majorStars": [
              "Liêm Trinh(Lợi)",
              "Thiên Phủ(Miếu)"
          ],
          "minorStars": [
              "Văn Xương(Hạn)",
              "Linh Tinh(Miếu)",
              "Kình Dương(Miếu)"
          ],
          "adjectiveStars": [
              "Thiên Diêu",
              "Thiên Đức",
              "Quả Tú"
          ],
          "changsheng12": "Mục Dục",
          "boshi12": "Quan Phủ",
          "jiangqian12": "Phan Án",
          "suiqian12": "Thiên Đức",
          "decadal": {
              "range": [
                  13,
                  22
              ],
              "heavenlyStem": "Mậu",
              "earthlyBranch": "Tuất"
          },
          "ages": [
              10,
              22,
              34,
              46,
              58,
              70,
              82,
              94,
              106,
              118
          ]
      },
      {
          "name": "Mệnh",
          "isBodyPalace": true,
          "isOriginalPalace": false,
          "heavenlyStem": "Kỷ",
          "earthlyBranch": "Hợi",
          "majorStars": [
              "Thái Âm(Miếu)"
          ],
          "minorStars": [
              "Thiên Mã",
              "Địa Không",
              "Địa Kiếp"
          ],
          "adjectiveStars": [],
          "changsheng12": "Trường Sinh",
          "boshi12": "Phục Binh",
          "jiangqian12": "Tuế Dịch",
          "suiqian12": "Điếu Khách",
          "decadal": {
              "range": [
                  3,
                  12
              ],
              "heavenlyStem": "Kỷ",
              "earthlyBranch": "Hợi"
          },
          "ages": [
              9,
              21,
              33,
              45,
              57,
              69,
              81,
              93,
              105,
              117
          ]
      },
      {
          "name": "Phụ Mẫu",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Canh",
          "earthlyBranch": "Tý",
          "majorStars": [
              "Tham Lang(Vượng)"
          ],
          "minorStars": [],
          "adjectiveStars": [
              "Thiên Tài",
              "Thiên Thọ"
          ],
          "changsheng12": "Dưỡng",
          "boshi12": "Đại Hao",
          "jiangqian12": "Tức Thần",
          "suiqian12": "Bệnh Phù",
          "decadal": {
              "range": [
                  113,
                  122
              ],
              "heavenlyStem": "Canh",
              "earthlyBranch": "Tý"
          },
          "ages": [
              8,
              20,
              32,
              44,
              56,
              68,
              80,
              92,
              104,
              116
          ]
      },
      {
          "name": "Phúc Đức",
          "isBodyPalace": false,
          "isOriginalPalace": false,
          "heavenlyStem": "Tân",
          "earthlyBranch": "Sửu",
          "majorStars": [
              "Thiên Đồng(Bất)",
              "Cự Môn(Bất)"
          ],
          "minorStars": [
              "Tả Phù",
              "Hữu Bật"
          ],
          "adjectiveStars": [
              "Hoa Cái",
              "Phá Toái"
          ],
          "changsheng12": "Thai",
          "boshi12": "Bệnh Phù",
          "jiangqian12": "Hoa Cái",
          "suiqian12": "Tuế Kiện",
          "decadal": {
              "range": [
                  103,
                  112
              ],
              "heavenlyStem": "Tân",
              "earthlyBranch": "Sửu"
          },
          "ages": [
              7,
              19,
              31,
              43,
              55,
              67,
              79,
              91,
              103,
              115
          ]
      }
  ],
  "interpretation": "Chào Hoàng Sơn, tôi là một thầy Tử Vi Đẩu Số với 30 năm kinh nghiệm. Hôm nay, tôi sẽ luận giải chi tiết lá số của bạn để bạn có cái nhìn rõ ràng hơn về vận mệnh của mình.\n\n**1. MỆNH CÁCH (Cung Mệnh + Cung Thân + Ngũ Hành Cục)**\n\n*   **Cung Mệnh tại Hợi:** Mệnh chủ là **Cự Môn** tại cung Hợi. Cự Môn là sao Thiên Cơ thuộc hành Thổ, chủ về khẩu thiệt, thị phi, thông minh, đa mưu. Tại cung Hợi, Cự Môn **hãm địa**. Điều này cho thấy tính cách của bạn có xu hướng **thông minh, sắc sảo, có khả năng ăn nói tốt, lý luận chặt chẽ**, tuy nhiên do Cự Môn hãm địa, bạn có thể **dễ bị cuốn vào thị phi, tranh cãi, lời nói đôi khi thiếu suy nghĩ dẫn đến hiểu lầm hoặc gây tổn thương người khác**. Bạn có đầu óc nhạy bén, dễ dàng nắm bắt vấn đề nhưng cũng dễ bị chi phối bởi cảm xúc và suy nghĩ của bản thân.\n*   **Cung Thân tại Hợi:** Thân chủ là **Thiên Tướng** tại cung Hợi. Thiên Tướng thuộc hành Đinh Thủy, là sao Quan Lộc tinh, chủ về sự uy nghi, quyền uy, chỉ huy, tính tình ngay thẳng, trọng nghĩa khí. Tại cung Hợi, Thiên Tướng **vượng địa**. Điều này cho thấy **hậu vận của bạn sẽ có nhiều cơ hội để thể hiện tài năng lãnh đạo, quản lý, có khả năng nắm giữ vị trí quan trọng, được mọi người kính nể**. Bạn là người có ý chí, quyết đoán, biết cách tổ chức và điều hành công việc, luôn hướng đến sự công bằng và chính nghĩa.\n*   **Ngũ Hành Cục: Mộc Tam Cục:** Ngũ hành cục Mộc tương sinh với hành Thổ của Cự Môn ở cung Mệnh, tạo nên sự **hỗ trợ nhất định cho việc phát triển bản thân, dù có những khó khăn ban đầu**. Tuy nhiên, do Cự Môn ở thế hãm địa, Mộc cục không thể hoàn toàn hóa giải được những bất lợi. Điều này cho thấy bạn cần phải **nỗ lực nhiều hơn, kiên trì và có phương pháp đúng đắn để vượt qua những thử thách trong cuộc sống**.\n\n**2. TÍNH CÁCH**\n\n*   **Ưu điểm nổi bật:**\n    *   **Thông minh, sắc sảo, có khả năng ăn nói và lý luận tốt:** Nhờ **Cự Môn (hãm)** tại Mệnh, bạn có tư duy nhạy bén, khả năng phân tích vấn đề tốt, dễ dàng thuyết phục người khác bằng lời nói.\n    *   **Kiên cường, ý chí, có khả năng lãnh đạo và quản lý:** **Thiên Tướng (vượng)** tại Thân cho thấy bạn có bản lĩnh, quyết đoán, có khả năng tổ chức, điều hành công việc hiệu quả và luôn giữ vững lập trường.\n    *   **Trọng nghĩa khí, ngay thẳng:** Bản chất của Thiên Tướng là vậy, bạn là người coi trọng chữ tín, giữ lời hứa và luôn hành động theo lẽ phải.\n    *   **Có khả năng thích ứng tốt:** Mặc dù Cự Môn hãm địa có thể gây ra thị phi, nhưng sự tương sinh của Mộc cục và sự vượng địa của Thiên Tướng giúp bạn có khả năng thích nghi và vượt qua khó khăn.\n*   **Nhược điểm cần khắc phục:**\n    *   **Dễ vướng vào thị phi, tranh cãi:** Do **Cự Môn (hãm)** tại Mệnh, bạn cần cẩn trọng trong lời ăn tiếng nói, tránh những lời lẽ gây hiểu lầm hoặc làm tổn thương người khác.\n    *   **Đôi khi quá bảo thủ hoặc cố chấp:** Tính cách mạnh mẽ của Thiên Tướng có thể khiến bạn trở nên cứng nhắc, khó thay đổi quan điểm khi đã quyết định.\n    *   **Dễ bị cảm xúc chi phối:** Mặc dù thông minh, nhưng Cự Môn hãm địa cũng khiến bạn dễ bị ảnh hưởng bởi tâm trạng, đôi khi hành động theo cảm tính.\n    *   **Có thể có xu hướng ôm đồm công việc:** **Thiên Tướng (vượng)** tại Thân đôi khi khiến bạn muốn gánh vác nhiều trách nhiệm, dẫn đến sự mệt mỏi hoặc bỏ sót việc.\n\n**3. SỰ NGHIỆP VÀ TÀI LỘC**\n\n*   **Cung Quan Lộc (Tân Mão):** Tại đây có **Thiên Lương (miếu)**. Thiên Lương là sao phúc tinh, chủ về sự thông thái, nhân hậu, có quý nhân phù trợ, thích hợp với các ngành nghề liên quan đến giáo dục, y tế, tư vấn, nghiên cứu, hoặc các công việc đòi hỏi sự kiên nhẫn và lòng trắc ẩn. Sự hiện diện của Thiên Lương tại đây cho thấy bạn có khả năng thành công trong các lĩnh vực này, sự nghiệp phát triển bền vững nhờ vào sự thông minh và khả năng hỗ trợ từ người khác.\n*   **Cung Tài Bạch (Ất Mùi):** Tại đây có **Thiên Đồng (miếu)** và **Hóa Lộc**. Thiên Đồng là sao phúc tinh, chủ về sự sung túc, an nhàn, có lộc trời ban. **Hóa Lộc** tại đây mang đến sự **thuận lợi về tài chính, tiền bạc kiếm được dễ dàng, có khả năng tích lũy tốt**. Thiên Đồng miếu địa kết hợp với Hóa Lộc là một tổ hợp rất tốt cho tài lộc, cho thấy bạn có khả năng kiếm tiền một cách tự nhiên, không quá vất vả.\n*   **Cung Điền Trạch (Canh Dần):** Tại đây có **Thái Âm (hãm)** và **Kình Dương (hãm)**. **Thái Âm hãm địa** tại cung Dần có thể gây ra một số **trục trặc về nhà cửa, đất đai, hoặc có sự thay đổi, di chuyển nơi ở**. **Kình Dương** là sát tinh, khi nhập vào Điền Trạch có thể mang đến **tranh chấp, kiện tụng liên quan đến tài sản, hoặc nhà cửa không được yên ổn, hay sửa chữa**. Tuy nhiên, bạn có **Đại hạn [93,102]** tại cung này, cho thấy giai đoạn cuối đời có thể có những vấn đề liên quan đến tài sản, cần chú ý.\n*   **Ngành nghề phù hợp:** Dựa trên Thiên Lương tại Quan Lộc, bạn có thể phát triển mạnh trong các lĩnh vực như: Giảng dạy, nghiên cứu khoa học, y bác sĩ, luật sư, cố vấn tài chính, tư vấn tâm lý, hoặc các công việc liên quan đến văn hóa, nghệ thuật.\n*   **Cách kiếm tiền:** Tiền bạc đến với bạn khá dễ dàng nhờ vào **Thiên Đồng (miếu) + Hóa Lộc** tại Tài Bạch. Bạn có thể kiếm tiền từ công việc chính, hoặc có thêm các nguồn thu nhập phụ. Sự thông minh và khả năng ăn nói cũng giúp bạn có lợi thế trong các giao dịch tài chính.\n*   **Khả năng tích lũy tài sản:** Tốt, đặc biệt là trong giai đoạn có Hóa Lộc. Tuy nhiên, cần chú ý đến cung Điền Trạch có Kình Dương, có thể có những biến động về nhà đất.\n*   **Giai đoạn đại hạn thuận lợi cho sự nghiệp:** Đại hạn **[23,32]** tại cung Phu Thê có **Vũ Khúc (miếu) + Tham Lang (miếu) + Hóa Quyền + Hóa Khoa**. Đây là giai đoạn cực kỳ thuận lợi cho sự nghiệp, có thể đạt được nhiều thành tựu lớn, thăng tiến nhanh chóng, có quyền lực và danh tiếng. Đại hạn **[43,52]** tại Tài Bạch với **Thiên Đồng (miếu) + Hóa Lộc** cũng rất tốt cho tài lộc và sự nghiệp.\n\n**4. TÌNH DUYÊN VÀ GIA ĐẠO**\n\n*   **Cung Phu Thê (Đinh Dậu):** Tại đây có **Thiên Cơ (miếu)** và **Thiên Lương (miếu)**, đồng thời có **Hóa Kỵ**. **Thiên Cơ** là sao thông minh, biến động, **Thiên Lương** là sao phúc tinh, nhân hậu. Sự kết hợp này cho thấy người bạn đời của bạn là người thông minh, có duyên, có khả năng vun vén gia đình và mang lại sự ổn định. Tuy nhiên, **Hóa Kỵ** tại cung Phu Thê có thể mang đến những **hiểu lầm, bất hòa nhỏ trong mối quan hệ, hoặc có sự ghen tuông, nghi kỵ**.\n*   **Mẫu người phù hợp:** Người bạn đời của bạn nên là người thông minh, có học thức, có tấm lòng nhân hậu, biết lắng nghe và chia sẻ. Họ có thể là người mang lại cho bạn sự ổn định và là chỗ dựa vững chắc.\n*   **Tuổi kết hôn tốt:** Đại hạn **[23,32]** tại cung Phu Thê là giai đoạn rất tốt để kết hôn.\n*   **Vấn đề cần lưu ý trong hôn nhân:** Do **Hóa Kỵ** tại Phu Thê, bạn cần **chủ động giao tiếp, chia sẻ thẳng thắn với đối phương để tránh những hiểu lầm không đáng có**. Sự nhạy bén của Cự Môn tại Mệnh cũng cần được kiểm soát để không dẫn đến những lời nói làm tổn thương người mình yêu.\n\n*   **Cung Tử Nữ (Bính Thân):** Tại đây có **Thái Dương (miếu)** và **Vũ Khúc (miếu)**. **Thái Dương** chủ về sự quang minh, chính đại, **Vũ Khúc** chủ về tài lộc, kiên cường. Điều này cho thấy con cái của bạn sẽ thông minh, có chí hướng, có khả năng thành công trong sự nghiệp. Tuy nhiên, do **Vũ Khúc là sao cô độc**, bạn có thể có ít con hoặc con cái có xu hướng độc lập, tự lập sớm.\n*   **Cung Huynh Đệ (Mậu Tuất):** Tại đây có **Thiên Phủ (vượng)** và **Thiên Mã (đắc)**, cùng với **Hóa Quyền**. **Thiên Phủ** là sao tài sản, chủ về sự sung túc, ổn định. **Thiên Mã** cho thấy anh chị em có thể **hay đi xa, hoặc có sự thay đổi nơi ở**. **Hóa Quyền** cho thấy anh chị em có người có quyền lực, có vị trí trong xã hội. Mối quan hệ với anh chị em nhìn chung là tốt, có sự hỗ trợ lẫn nhau, nhưng cũng có thể có những người cá tính mạnh.\n\n**5. SỨC KHỎE (Cung Tật Ách)**\n\n*   **Cung Tật Ách (Giáp Ngọ):** Tại đây có **Hỏa Tinh (miếu)**, **Linh Tinh (miếu)**, **Thiên Cơ (miếu)**, **Thiên Lương (miếu)**, **Hóa Khoa**, **Hóa Quyền**, **Hóa Lộc**. Sự hiện diện của **Hỏa Tinh và Linh Tinh** tại đây là điều cần lưu ý. Hỏa Tinh và Linh Tinh có thể mang đến các bệnh về **huyết áp, tim mạch, các bệnh viêm nhiễm, nóng sốt, hoặc các chấn thương bất ngờ**. **Thiên Cơ và Thiên Lương** tại đây lại là những sao tốt, cho thấy bạn có khả năng **phục hồi sức khỏe tốt, hoặc có phương pháp chữa trị hiệu quả**. **Hóa Khoa, Hóa Quyền, Hóa Lộc** có thể giúp bạn tìm được phương pháp chữa bệnh tốt hoặc có quý nhân giúp đỡ về sức khỏe.\n*   **Bộ phận cơ thể cần chú ý:** Tim mạch, huyết áp, hệ tiêu hóa, và các vấn đề liên quan đến nhiệt độ cơ thể. Cần chú ý giữ gìn sức khỏe, tránh căng thẳng quá độ.\n\n**6. ĐẠI HẠN QUAN TRỌNG**\n\n*   **Đại hạn [3,12] (Cung Mệnh - Kỷ Hợi):** Thời kỳ ấu thơ, với **Cự Môn (hãm)** tại Mệnh. Giai đoạn này có thể có những **khó khăn ban đầu, cần sự quan tâm đặc biệt từ gia đình**.\n*   **Đại hạn [23,32] (Cung Phu Thê - Đinh Dậu):** Đây là một trong những giai đoạn **thuận lợi và rực rỡ nhất** của cuộc đời bạn. Với **Vũ Khúc (miếu) + Tham Lang (miếu) + Hóa Quyền + Hóa Khoa** tại cung Phu Thê, bạn sẽ có bước nhảy vọt trong sự nghiệp, có thể đạt được danh vọng, quyền lực và tài lộc. Đây cũng là giai đoạn rất tốt để kết hôn và xây dựng gia đình.\n*   **Đại hạn [43,52] (Cung Tài Bạch - Ất Mùi):** Giai đoạn này tiếp tục mang lại **sự sung túc và thịnh vượng về tài chính**. Với **Thiên Đồng (miếu) + Hóa Lộc** tại Tài Bạch, tiền bạc kiếm được dễ dàng, có khả năng tích lũy tài sản lớn. Sự nghiệp cũng tiếp tục phát triển.\n*   **Đại hạn [63,72] (Cung Thiên Di - Quý Tỵ):** Tại đây có **Thiên Phủ (vượng)**, **Thiên Mã (đắc)**, **Hóa Quyền**. Đây là giai đoạn bạn có thể **mở rộng tầm ảnh hưởng, có cơ hội đi xa, phát triển ở những vùng đất mới hoặc trong môi trường quốc tế**. Có thể có những bước tiến lớn trong sự nghiệp nhờ vào uy tín và quyền lực.\n\n**7. LỜI KHUYÊN CỤ THỂ**\n\n1.  **Cẩn trọng trong lời nói:** Do **Cự Môn (hãm)** tại Mệnh, bạn cần luôn ý thức về sức mạnh của lời nói. Hãy suy nghĩ kỹ trước khi phát ngôn, tránh những lời lẽ có thể gây tổn thương hoặc dẫn đến thị phi không đáng có. Điều này sẽ giúp bạn giữ gìn các mối quan hệ và sự nghiệp.\n2.  **Tận dụng cơ hội phát triển sự nghiệp:** Đặc biệt là trong đại hạn **[23,32]** và **[43,52]**. Hãy mạnh dạn nắm bắt các cơ hội, thể hiện năng lực của bản thân. Sự kết hợp của **Hóa Quyền, Hóa Khoa, Hóa Lộc** sẽ mang lại những thành tựu lớn.\n3.  **Nuôi dưỡng mối quan hệ gia đình:** Mặc dù có những giai đoạn thuận lợi, nhưng **Hóa Kỵ** tại Phu Thê đòi hỏi sự vun đắp và giao tiếp chân thành. Hãy dành thời gian cho người thân, chia sẻ và thấu hiểu lẫn nhau.\n4.  **Chú ý giữ gìn sức khỏe:** Với sự hiện diện của **Hỏa Tinh, Linh Tinh** tại Tật Ách, bạn cần có chế độ sinh hoạt lành mạnh, tránh thức khuya, ăn uống điều độ và kiểm tra sức khỏe định kỳ.\n5.  **Đừng ngại thay đổi và học hỏi:** Mặc dù có tính cách mạnh mẽ, nhưng sự linh hoạt và khả năng học hỏi từ môi trường xung quanh sẽ giúp bạn phát triển hơn nữa. Hãy cởi mở với những ý kiến trái chiều và luôn trau dồi kiến thức.\n\nChúc Hoàng Sơn luôn mạnh khỏe, hạnh phúc và thành công trên con đường của mình!",
  "summary": [
      {
          "name": "Sự nghiệp",
          "description": "Sự nghiệp có nhiều triển vọng phát triển thuận lợi, đặc biệt trong các lĩnh vực liên quan đến giáo dục, y tế, tư vấn, nghiên cứu nhờ có Thiên Lương (miếu) tại cung Quan Lộc. Giai đoạn đại hạn [23,32] với Vũ Khúc (miếu) + Tham Lang (miếu) + Hóa Quyền + Hóa Khoa tại cung Phu Thê là thời kỳ đỉnh cao, có thể đạt được nhiều thành tựu lớn, thăng tiến nhanh chóng, có quyền lực và danh tiếng. Đại hạn [63,72] tại cung Thiên Di với Thiên Phủ (vượng) + Thiên Mã (đắc) + Hóa Quyền cũng hứa hẹn mở rộng tầm ảnh hưởng và phát triển ở những lĩnh vực mới. Tuy nhiên, cần lưu ý Cự Môn (hãm) tại Mệnh có thể khiến lời nói đôi khi gây thị phi, cần cẩn trọng trong giao tiếp để không ảnh hưởng đến công việc."
      },
      {
          "name": "Tài lộc",
          "description": "Tài lộc nhìn chung rất tốt, có khả năng kiếm tiền dễ dàng và tích lũy tốt nhờ Thiên Đồng (miếu) và Hóa Lộc tại cung Tài Bạch. Đại hạn [43,52] tại cung Tài Bạch với Thiên Đồng (miếu) + Hóa Lộc tiếp tục mang lại sự sung túc và thịnh vượng, tiền bạc dồi dào. Tuy nhiên, cần chú ý đến cung Điền Trạch có Thái Âm (hãm) và Kình Dương (hãm), có thể có những trục trặc hoặc tranh chấp liên quan đến nhà cửa, đất đai, cần cẩn trọng trong các giao dịch bất động sản."
      },
      {
          "name": "Tình duyên",
          "description": "Tình duyên có sự hài hòa nhưng cần chú ý đến những bất hòa nhỏ. Người bạn đời là người thông minh, có duyên và mang lại sự ổn định nhờ Thiên Cơ (miếu) và Thiên Lương (miếu) tại cung Phu Thê. Tuy nhiên, Hóa Kỵ tại cung này có thể gây ra những hiểu lầm, bất hòa hoặc ghen tuông nhỏ, đòi hỏi sự giao tiếp chân thành và chủ động để hóa giải. Đại hạn [23,32] tại cung Phu Thê là thời điểm rất tốt để kết hôn."
      },
      {
          "name": "Sức khỏe",
          "description": "Cần chú ý đến các vấn đề về huyết áp, tim mạch, hệ tiêu hóa và các bệnh liên quan đến nhiệt độ cơ thể do sự hiện diện của Hỏa Tinh (miếu) và Linh Tinh (miếu) tại cung Tật Ách. Tuy nhiên, Thiên Cơ (miếu) và Thiên Lương (miếu) tại đây cũng cho thấy khả năng phục hồi tốt và có thể tìm được phương pháp chữa trị hiệu quả nhờ vào các sao Hóa Khoa, Hóa Quyền, Hóa Lộc."
      },
      {
          "name": "Gia đạo / Phúc đức",
          "description": "Mối quan hệ với anh chị em nhìn chung tốt, có sự hỗ trợ lẫn nhau nhờ Thiên Phủ (vượng) và Thiên Mã (đắc) tại cung Huynh Đệ, tuy nhiên có thể có những người cá tính mạnh. Con cái thông minh, có chí hướng và khả năng thành công nhờ Thái Dương (miếu) và Vũ Khúc (miếu) tại cung Tử Nữ, nhưng có thể có xu hướng độc lập sớm. Cần chú ý vun đắp mối quan hệ vợ chồng do Hóa Kỵ tại cung Phu Thê."
      },
      {
          "name": "Vận hạn tổng quan",
          "description": "Cuộc đời có những giai đoạn thuận lợi và rực rỡ, đặc biệt là đại hạn [23,32] với nhiều thành tựu lớn về sự nghiệp và tài lộc, cũng là thời điểm tốt để kết hôn. Đại hạn [43,52] tiếp tục mang lại sự sung túc về tài chính. Tuy nhiên, cần cẩn trọng trong lời nói do Cự Môn (hãm) tại Mệnh và chú ý giữ gìn sức khỏe do Hỏa Tinh, Linh Tinh tại Tật Ách. Giai đoạn ấu thơ [3,12] có thể có những khó khăn ban đầu."
      }
  ],
  "advice": "Sự nghiệp có nhiều triển vọng phát triển thuận lợi, đặc biệt trong các lĩnh vực liên quan đến giáo dục, y tế, tư vấn, nghiên cứu nhờ có Thiên Lương (miếu) tại cung Quan Lộc. Giai đoạn đại hạn [23,32] với Vũ Khúc (miếu) + Tham Lang (miếu) + Hóa Quyền + Hóa Khoa tại cung Phu Thê là thời kỳ đỉnh cao, có thể đạt được nhiều thành tựu lớn, thăng tiến nhanh chóng, có quyền lực và danh tiếng. Đại hạn [63,72] tại cung Thiên Di với Thiên Phủ (vượng) + Thiên Mã (đắc) + Hóa Quyền cũng hứa hẹn mở rộng tầm ảnh hưởng và phát triển ở những lĩnh vực mới. Tuy nhiên, cần lưu ý Cự Môn (hãm) tại Mệnh có thể khiến lời nói đôi khi gây thị phi, cần cẩn trọng trong giao tiếp để không ảnh hưởng đến công việc. Tài lộc nhìn chung rất tốt, có khả năng kiếm tiền dễ dàng và tích lũy tốt nhờ Thiên Đồng (miếu) và Hóa Lộc tại cung Tài Bạch. Đại hạn [43,52] tại cung Tài Bạch với Thiên Đồng (miếu) + Hóa Lộc tiếp tục mang lại sự sung túc và thịnh vượng, tiền bạc dồi dào. Tuy nhiên, cần chú ý đến cung Điền Trạch có Thái Âm (hãm) và Kình Dương (hãm), có thể có những trục trặc hoặc tranh chấp liên quan đến nhà cửa, đất đai, cần cẩn trọng trong các giao dịch bất động sản. Tình duyên có sự hài hòa nhưng cần chú ý đến những bất hòa nhỏ. Người bạn đời là người thông minh, có duyên và mang lại sự ổn định nhờ Thiên Cơ (miếu) và Thiên Lương (miếu) tại cung Phu Thê. Tuy nhiên, Hóa Kỵ tại cung này có thể gây ra những hiểu lầm, bất hòa hoặc ghen tuông nhỏ, đòi hỏi sự giao tiếp chân thành và chủ động để hóa giải. Đại hạn [23,32] tại cung Phu Thê là thời điểm rất tốt để kết hôn. Cần chú ý đến các vấn đề về huyết áp, tim mạch, hệ tiêu hóa và các bệnh liên quan đến nhiệt độ cơ thể do sự hiện diện của Hỏa Tinh (miếu) và Linh Tinh (miếu) tại cung Tật Ách. Tuy nhiên, Thiên Cơ (miếu) và Thiên Lương (miếu) tại đây cũng cho thấy khả năng phục hồi tốt và có thể tìm được phương pháp chữa trị hiệu quả nhờ vào các sao Hóa Khoa, Hóa Quyền, Hóa Lộc. Mối quan hệ với anh chị em nhìn chung tốt, có sự hỗ trợ lẫn nhau nhờ Thiên Phủ (vượng) và Thiên Mã (đắc) tại cung Huynh Đệ, tuy nhiên có thể có những người cá tính mạnh. Con cái thông minh, có chí hướng và khả năng thành công nhờ Thái Dương (miếu) và Vũ Khúc (miếu) tại cung Tử Nữ, nhưng có thể có xu hướng độc lập sớm. Cần chú ý vun đắp mối quan hệ vợ chồng do Hóa Kỵ tại cung Phu Thê. Cuộc đời có những giai đoạn thuận lợi và rực rỡ, đặc biệt là đại hạn [23,32] với nhiều thành tựu lớn về sự nghiệp và tài lộc, cũng là thời điểm tốt để kết hôn. Đại hạn [43,52] tiếp tục mang lại sự sung túc về tài chính. Tuy nhiên, cần cẩn trọng trong lời nói do Cự Môn (hãm) tại Mệnh và chú ý giữ gìn sức khỏe do Hỏa Tinh, Linh Tinh tại Tật Ách. Giai đoạn ấu thơ [3,12] có thể có những khó khăn ban đầu."
}