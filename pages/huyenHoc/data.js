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

const zodiacFolder = '../../assets/zodiac/';

export const zodiacMapping = {
  "Cung Xử Nữ" : {
    path: zodiacFolder + 'xuNu.PNG'
  }
}

export const mockData = {
  "name": "user",
  "birthDate": "1999-6-3",
  "lunarDate": "Ngày 20 tháng 4 năm 1999",
  "chineseDate": "Kỷ Mão - Kỷ Tỵ - Bính Tuất - Kỷ Sửu",
  "zodiac": "Mèo",
  "sign": "Cung Song Tử",
  "fiveElementsClass": "Mộc Tam Cục",
  "soul": "Liêm Trinh",
  "body": "Thiên Đồng",
  "palaces": [
      {
          "name": "Phu Thê",
          "heavenlyStem": "Bính",
          "earthlyBranch": "Dần",
          "majorStars": [
              "Thiên Đồng(Lợi)",
              "Thiên Lương(Miếu)"
          ],
          "minorStars": [],
          "decadal": {
              "range": [
                  23,
                  32
              ],
              "heavenlyStem": "Bính",
              "earthlyBranch": "Dần"
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
          "name": "Huynh Đệ",
          "heavenlyStem": "Đinh",
          "earthlyBranch": "Mão",
          "majorStars": [
              "Vũ Khúc(Lợi)",
              "Thất Sát(Vượng)"
          ],
          "minorStars": [],
          "decadal": {
              "range": [
                  13,
                  22
              ],
              "heavenlyStem": "Đinh",
              "earthlyBranch": "Mão"
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
          "name": "Mệnh",
          "heavenlyStem": "Mậu",
          "earthlyBranch": "Thìn",
          "majorStars": [
              "Thái Dương(Vượng)"
          ],
          "minorStars": [],
          "decadal": {
              "range": [
                  3,
                  12
              ],
              "heavenlyStem": "Mậu",
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
          "name": "Phụ Mẫu",
          "heavenlyStem": "Kỷ",
          "earthlyBranch": "Tỵ",
          "majorStars": [],
          "minorStars": [
              "Văn Khúc(Miếu)",
              "Thiên Mã",
              "Đà La(Hạn)"
          ],
          "decadal": {
              "range": [
                  113,
                  122
              ],
              "heavenlyStem": "Kỷ",
              "earthlyBranch": "Tỵ"
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
          "name": "Phúc Đức",
          "heavenlyStem": "Canh",
          "earthlyBranch": "Ngọ",
          "majorStars": [
              "Thiên Cơ(Miếu)"
          ],
          "minorStars": [
              "Lộc Tồn"
          ],
          "decadal": {
              "range": [
                  103,
                  112
              ],
              "heavenlyStem": "Canh",
              "earthlyBranch": "Ngọ"
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
          "name": "Điền Trạch",
          "heavenlyStem": "Tân",
          "earthlyBranch": "Mùi",
          "majorStars": [
              "Tử Vi(Miếu)",
              "Phá Quân(Vượng)"
          ],
          "minorStars": [
              "Tả Phù",
              "Hữu Bật",
              "Kình Dương(Miếu)"
          ],
          "decadal": {
              "range": [
                  93,
                  102
              ],
              "heavenlyStem": "Tân",
              "earthlyBranch": "Mùi"
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
      },
      {
          "name": "Quan Lộc",
          "heavenlyStem": "Nhâm",
          "earthlyBranch": "Thân",
          "majorStars": [],
          "minorStars": [
              "Thiên Việt"
          ],
          "decadal": {
              "range": [
                  83,
                  92
              ],
              "heavenlyStem": "Nhâm",
              "earthlyBranch": "Thân"
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
          "name": "Nô Bộc",
          "heavenlyStem": "Quý",
          "earthlyBranch": "Dậu",
          "majorStars": [
              "Thiên Phủ(Vượng)"
          ],
          "minorStars": [
              "Văn Xương(Miếu)"
          ],
          "decadal": {
              "range": [
                  73,
                  82
              ],
              "heavenlyStem": "Quý",
              "earthlyBranch": "Dậu"
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
          "name": "Thiên Di",
          "heavenlyStem": "Giáp",
          "earthlyBranch": "Tuất",
          "majorStars": [
              "Thái Âm(Vượng)"
          ],
          "minorStars": [
              "Địa Không",
              "Hỏa Tinh(Miếu)"
          ],
          "decadal": {
              "range": [
                  63,
                  72
              ],
              "heavenlyStem": "Giáp",
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
          "name": "Tật Ách",
          "heavenlyStem": "Ất",
          "earthlyBranch": "Hợi",
          "majorStars": [
              "Liêm Trinh(Hạn)",
              "Tham Lang(Hạn)"
          ],
          "minorStars": [
              "Linh Tinh(Lợi)"
          ],
          "decadal": {
              "range": [
                  53,
                  62
              ],
              "heavenlyStem": "Ất",
              "earthlyBranch": "Hợi"
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
          "name": "Tài Bạch",
          "heavenlyStem": "Bính",
          "earthlyBranch": "Tý",
          "majorStars": [
              "Cự Môn(Vượng)"
          ],
          "minorStars": [
              "Thiên Khôi",
              "Địa Kiếp"
          ],
          "decadal": {
              "range": [
                  43,
                  52
              ],
              "heavenlyStem": "Bính",
              "earthlyBranch": "Tý"
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
          "name": "Tử Nữ",
          "heavenlyStem": "Đinh",
          "earthlyBranch": "Sửu",
          "majorStars": [
              "Thiên Tướng(Miếu)"
          ],
          "minorStars": [],
          "decadal": {
              "range": [
                  33,
                  42
              ],
              "heavenlyStem": "Đinh",
              "earthlyBranch": "Sửu"
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
      }
  ],
  "interpretation": "Chào bạn, tôi là chuyên gia Tử Vi Đẩu Số. Dựa trên lá số bạn cung cấp, tôi xin đưa ra những phân tích chi tiết dưới đây:\n\n## Phân Tích Lá Số Tử Vi\n\n**1. Tổng quan mệnh cách (cung Mệnh, cung Thân, ngũ hành cục)**\n\n*   **Ngũ hành Cục: Mộc Tam Cục:** Cho thấy bạn là người có sức sống, có khả năng thích ứng tốt, tuy nhiên cũng có thể hơi nóng nảy, dễ bị tác động bởi hoàn cảnh bên ngoài.\n*   **Cung Mệnh: Liêm Trinh tại Thìn:** Liêm Trinh là một sao đào hoa, chủ về tình cảm, nghệ thuật, nhưng cũng có mặt tiêu cực là dễ gây thị phi, tranh chấp, hoặc có nhiều biến động trong đời sống tình cảm. Đặt tại cung Thìn cho thấy bạn là người có cá tính mạnh mẽ, có khả năng lãnh đạo, nhưng đôi khi hơi độc đoán và cố chấp.\n*   **Cung Thân: Thiên Đồng tại Ngọ:** Thiên Đồng là sao phúc tinh, chủ về sự vui vẻ, lạc quan, may mắn và có quý nhân phù trợ. Đặt tại cung Ngọ cho thấy bạn là người có tâm hồn nghệ sĩ, thích tự do, có tài ăn nói và dễ dàng tạo dựng mối quan hệ. Tuy nhiên, Thiên Đồng cũng có thể mang lại sự ỷ lại, thiếu quyết đoán.\n*   **Sự kết hợp Mệnh và Thân:** Mệnh Liêm Trinh và Thân Thiên Đồng cho thấy bạn là người có sự đối lập giữa lý trí và tình cảm, giữa sự quyết đoán và sự mềm mỏng. Bạn có thể là người có tham vọng, thích thể hiện bản thân nhưng cũng rất coi trọng sự bình yên và hạnh phúc cá nhân.\n\n**2. Tính cách và con người**\n\nBạn là người có **tính cách khá phức tạp, đa chiều**. Một mặt, bạn là người **năng động, có ý chí, dám nghĩ dám làm** nhờ ảnh hưởng của Liêm Trinh. Bạn có khả năng **lãnh đạo bẩm sinh**, thích chỉ huy và định hướng. Tuy nhiên, bạn cũng có thể là người **nhạy cảm, dễ bị tổn thương** trong chuyện tình cảm và dễ vướng vào những rắc rối, thị phi không đáng có.\n\nMặt khác, sự hiện diện của Thiên Đồng ở cung Thân mang lại cho bạn **sự lạc quan, yêu đời, có khiếu hài hước** và khả năng **hấp dẫn người khác**. Bạn thích được tự do, không thích bị gò bó, và có xu hướng tìm kiếm những điều mới mẻ, thú vị trong cuộc sống. Bạn có **tài ăn nói, dễ dàng kết bạn** và thường nhận được sự yêu mến từ mọi người.\n\nĐiểm mâu thuẫn có thể xuất hiện là bạn vừa muốn khẳng định bản thân, có tham vọng, nhưng đôi khi lại có xu hướng **ỷ lại, thiếu quyết đoán**, đặc biệt là khi đối mặt với những khó khăn lớn. Bạn cần học cách cân bằng giữa sự chủ động và sự lắng nghe, giữa lý trí và tình cảm để đưa ra những quyết định sáng suốt hơn.\n\n**3. Sự nghiệp và tài lộc**\n\n*   **Sự nghiệp:** Với Liêm Trinh ở cung Mệnh, bạn có tiềm năng trong các lĩnh vực đòi hỏi sự **quyết đoán, khả năng lãnh đạo, hoặc liên quan đến nghệ thuật, giải trí, ngoại giao, luật pháp**. Bạn có thể gặp được những cơ hội thăng tiến tốt, tuy nhiên cần cẩn trọng với những **mâu thuẫn, tranh chấp trong công việc**. Sự nghiệp của bạn có thể có những bước **thăng trầm, biến động** nhưng cũng có thể đạt được thành công lớn nếu biết tận dụng và kiểm soát tốt.\n*   **Tài lộc:** Tài lộc của bạn có thể đến từ nhiều nguồn, có lúc dồi dào, có lúc lại có những khoản chi bất ngờ. Do ảnh hưởng của Liêm Trinh, bạn có thể có xu hướng **chi tiêu cho tình cảm, sở thích cá nhân hoặc những thứ mang tính hình thức**. Thiên Đồng ở cung Thân lại mang đến **may mắn về tiền bạc**, có thể có những khoản thu nhập bất ngờ hoặc được người khác giúp đỡ. Tuy nhiên, bạn cần có kế hoạch tài chính rõ ràng, tránh tiêu xài hoang phí hoặc đầu tư mạo hiểm không tính toán.\n\n**4. Tình duyên và gia đạo**\n\n*   **Tình duyên:** Liêm Trinh là sao chủ về tình cảm, nên chuyện tình duyên của bạn khá **sôi động nhưng cũng tiềm ẩn nhiều sóng gió**. Bạn có thể là người **đam mê, nồng nhiệt** trong tình yêu, nhưng cũng dễ bị **ghen tuông, mâu thuẫn** hoặc vướng vào những mối quan hệ phức tạp. Cần có sự **chín chắn, kiên nhẫn và bao dung** để giữ gìn hạnh phúc.\n*   **Gia đạo:** Gia đạo của bạn có thể có những lúc **khá yên ấm, vui vẻ** nhờ ảnh hưởng của Thiên Đồng. Tuy nhiên, do Liêm Trinh chủ về thị phi, bạn cần **hạn chế những lời qua tiếng lại, tránh gây mâu thuẫn** với người thân trong gia đình. Quan hệ với anh chị em có thể không quá gắn bó, hoặc có những bất đồng quan điểm.\n\n**5. Sức khỏe**\n\nSức khỏe của bạn nhìn chung là **khá tốt**, nhờ có Thiên Đồng là sao phúc tinh. Tuy nhiên, do Liêm Trinh dễ gây căng thẳng, bạn có thể dễ mắc các bệnh liên quan đến **thần kinh, tim mạch, hoặc các bệnh do căng thẳng gây ra**. Cần chú ý đến **chế độ ăn uống, nghỉ ngơi hợp lý** và **giữ tinh thần lạc quan, giảm bớt lo âu**.\n\n**6. Lời khuyên**\n\n*   **Phát huy điểm mạnh:** Hãy tận dụng sự **năng động, quyết đoán** của Liêm Trinh để theo đuổi mục tiêu sự nghiệp. Đồng thời, hãy phát huy sự **lạc quan, khả năng giao tiếp** của Thiên Đồng để xây dựng các mối quan hệ tốt đẹp.\n*   **Hạn chế điểm yếu:** Cần **kiềm chế tính nóng nảy, tránh tham gia vào những chuyện thị phi** không đáng có. Tập **lắng nghe, thấu hiểu** hơn trong các mối quan hệ. Đối với chuyện tình cảm, hãy **chín chắn, kiên nhẫn** và đừng để sự ghen tuông chi phối.\n*   **Cân bằng cuộc sống:** Tìm cách **cân bằng giữa công việc và cuộc sống cá nhân**, giữa sự nghiệp và gia đình. Đừng quá đặt nặng vấn đề tiền bạc mà bỏ quên những giá trị tinh thần.\n*   **Chăm sóc sức khỏe:** Hãy **quan tâm đến sức khỏe tinh thần**, học cách **giảm stress** và **giữ cho mình một tinh thần vui vẻ, lạc quan**.\n\nHy vọng những phân tích này sẽ giúp bạn hiểu rõ hơn về bản thân và có những định hướng tốt đẹp cho cuộc sống. Chúc bạn mọi điều tốt lành!",
  "summary": "Bạn là người có cá tính mạnh mẽ, năng động, có khả năng lãnh đạo nhưng đôi khi nóng nảy và dễ vướng thị phi. Sự nghiệp có tiềm năng thăng trầm, đòi hỏi sự quyết đoán và cẩn trọng. Tài lộc có may mắn nhưng cần quản lý chi tiêu hợp lý. Tình duyên sôi động nhưng dễ có sóng gió, cần sự chín chắn và bao dung."
};
