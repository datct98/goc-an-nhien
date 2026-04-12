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
  name: "user",
  birthDate: "1973-9-6",
  lunarDate: "Ngày mùng 10 tháng 8 năm 1973",
  chineseDate: "Quý Sửu - Tân Dậu - Ất Tỵ - Kỷ Mão",
  zodiac: "Trâu",
  sign: "Cung Xử Nữ",
  fiveElementsClass: "Hỏa Lục Cục",
  soul: "Phá Quân",
  body: "Thiên Tướng",
  palaces: [
    {
      name: "Tài Bạch",
      heavenlyStem: "Giáp",
      earthlyBranch: "Dần",
      majorStars: ["Thái Dương(Vượng)", "Cự Môn(Miếu)"],
      minorStars: ["Địa Kiếp"],
      decadal: {
        range: [46, 55],
        heavenlyStem: "Giáp",
        earthlyBranch: "Dần",
      },
      ages: [8, 20, 32, 44, 56, 68, 80, 92, 104, 116],
    },
    {
      name: "Tử Nữ",
      heavenlyStem: "Ất",
      earthlyBranch: "Mão",
      majorStars: ["Thiên Tướng(Hạn)"],
      minorStars: ["Hữu Bật", "Thiên Khôi"],
      decadal: {
        range: [36, 45],
        heavenlyStem: "Ất",
        earthlyBranch: "Mão",
      },
      ages: [9, 21, 33, 45, 57, 69, 81, 93, 105, 117],
    },
    {
      name: "Phu Thê",
      heavenlyStem: "Bính",
      earthlyBranch: "Thìn",
      majorStars: ["Thiên Cơ(Lợi)", "Thiên Lương(Miếu)"],
      minorStars: [],
      decadal: {
        range: [26, 35],
        heavenlyStem: "Bính",
        earthlyBranch: "Thìn",
      },
      ages: [10, 22, 34, 46, 58, 70, 82, 94, 106, 118],
    },
    {
      name: "Huynh Đệ",
      heavenlyStem: "Đinh",
      earthlyBranch: "Tỵ",
      majorStars: ["Tử Vi(Vượng)", "Thất Sát(Bình)"],
      minorStars: ["Thiên Việt"],
      decadal: {
        range: [16, 25],
        heavenlyStem: "Đinh",
        earthlyBranch: "Tỵ",
      },
      ages: [11, 23, 35, 47, 59, 71, 83, 95, 107, 119],
    },
    {
      name: "Mệnh",
      heavenlyStem: "Mậu",
      earthlyBranch: "Ngọ",
      majorStars: [],
      minorStars: ["Hỏa Tinh(Miếu)"],
      decadal: {
        range: [6, 15],
        heavenlyStem: "Mậu",
        earthlyBranch: "Ngọ",
      },
      ages: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120],
    },
    {
      name: "Phụ Mẫu",
      heavenlyStem: "Kỷ",
      earthlyBranch: "Mùi",
      majorStars: [],
      minorStars: ["Văn Xương(Lợi)", "Văn Khúc(Vượng)"],
      decadal: {
        range: [116, 125],
        heavenlyStem: "Kỷ",
        earthlyBranch: "Mùi",
      },
      ages: [1, 13, 25, 37, 49, 61, 73, 85, 97, 109],
    },
    {
      name: "Phúc Đức",
      heavenlyStem: "Canh",
      earthlyBranch: "Thân",
      majorStars: [],
      minorStars: ["Địa Không"],
      decadal: {
        range: [106, 115],
        heavenlyStem: "Canh",
        earthlyBranch: "Thân",
      },
      ages: [2, 14, 26, 38, 50, 62, 74, 86, 98, 110],
    },
    {
      name: "Điền Trạch",
      heavenlyStem: "Tân",
      earthlyBranch: "Dậu",
      majorStars: ["Liêm Trinh(Bình)", "Phá Quân(Hạn)"],
      minorStars: [],
      decadal: {
        range: [96, 105],
        heavenlyStem: "Tân",
        earthlyBranch: "Dậu",
      },
      ages: [3, 15, 27, 39, 51, 63, 75, 87, 99, 111],
    },
    {
      name: "Quan Lộc",
      heavenlyStem: "Nhâm",
      earthlyBranch: "Tuất",
      majorStars: [],
      minorStars: [],
      decadal: {
        range: [86, 95],
        heavenlyStem: "Nhâm",
        earthlyBranch: "Tuất",
      },
      ages: [4, 16, 28, 40, 52, 64, 76, 88, 100, 112],
    },
    {
      name: "Nô Bộc",
      heavenlyStem: "Quý",
      earthlyBranch: "Hợi",
      majorStars: ["Thiên Phủ(Đắc)"],
      minorStars: ["Tả Phù", "Thiên Mã", "Đà La(Hạn)"],
      decadal: {
        range: [76, 85],
        heavenlyStem: "Quý",
        earthlyBranch: "Hợi",
      },
      ages: [5, 17, 29, 41, 53, 65, 77, 89, 101, 113],
    },
    {
      name: "Thiên Di",
      heavenlyStem: "Giáp",
      earthlyBranch: "Tý",
      majorStars: ["Thiên Đồng(Vượng)", "Thái Âm(Miếu)"],
      minorStars: ["Lộc Tồn"],
      decadal: {
        range: [66, 75],
        heavenlyStem: "Giáp",
        earthlyBranch: "Tý",
      },
      ages: [6, 18, 30, 42, 54, 66, 78, 90, 102, 114],
    },
    {
      name: "Tật Ách",
      heavenlyStem: "Ất",
      earthlyBranch: "Sửu",
      majorStars: ["Vũ Khúc(Miếu)", "Tham Lang(Miếu)"],
      minorStars: ["Linh Tinh(Đắc)", "Kình Dương(Miếu)"],
      decadal: {
        range: [56, 65],
        heavenlyStem: "Ất",
        earthlyBranch: "Sửu",
      },
      ages: [7, 19, 31, 43, 55, 67, 79, 91, 103, 115],
    },
  ],
  interpretation:
    "Chào bạn, tôi là chuyên gia Tử Vi Đẩu Số. Dựa trên thông tin bạn cung cấp, tôi xin phân tích lá số của bạn như sau:\n\n**1. Tổng quan mệnh cách (Cung Mệnh, Cung Thân, Ngũ Hành Cục)**\n\n*   **Ngũ Hành Cục: Hỏa Lục Cục.** Ngũ hành này cho thấy bạn là người có tính cách nóng nảy, nhiệt tình, năng động, có ý chí mạnh mẽ và dễ thành công trong các lĩnh vực liên quan đến lửa, ánh sáng, điện, hoặc những công việc đòi hỏi sự bứt phá. Tuy nhiên, cần chú ý kiểm soát cảm xúc để tránh những xung đột không đáng có.\n*   **Mệnh chủ: Phá Quân.** Đây là một sao chủ về sự thay đổi, phá cách, bứt phá, đôi khi có phần liều lĩnh. Người có Phá Quân tại Mệnh thường có tư duy đột phá, không ngại khó khăn, thích thử thách và có khả năng tạo ra những thành tựu lớn. Tuy nhiên, cũng có thể gặp phải những biến động, thay đổi bất ngờ trong cuộc sống.\n*   **Thân chủ: Thiên Tướng.** Thiên Tướng là sao chủ về sự uy quyền, quyền hành, trách nhiệm, nhưng cũng cần có sự phù trợ của các sao khác. Khi Thiên Tướng ở cung Thân, cho thấy bạn là người có khả năng lãnh đạo, có trách nhiệm, có uy tín và dễ dàng đạt được vị trí cao trong sự nghiệp. Tuy nhiên, cần cẩn trọng trong việc sử dụng quyền lực và tránh bị người khác lợi dụng.\n*   **Cung Mệnh: Ngọ.** Mệnh ở cung Ngọ là vị trí của sao Phá Quân. Ngọ thuộc Hỏa, tương sinh với Hỏa Lục Cục, cho thấy có sự tương trợ về ngũ hành, giúp bạn phát huy tốt hơn những ưu điểm của mình.\n*   **Cung Thân: Tý.** Thân ở cung Tý là vị trí của sao Thiên Tướng. Tý thuộc Thủy, lại tương khắc với Hỏa Lục Cục. Điều này có thể tạo ra một số mâu thuẫn nội tại, đòi hỏi bạn phải có sự cân bằng và điều chỉnh trong cuộc sống.\n\n**Tổng kết:** Lá số này cho thấy bạn là người có tiềm năng lớn, có khả năng tạo dựng sự nghiệp vững chắc và đạt được thành công. Tuy nhiên, cuộc đời bạn sẽ có nhiều biến động, đòi hỏi sự linh hoạt, kiên trì và khả năng thích ứng cao.\n\n**2. Tính cách và con người**\n\n*   **Năng động, nhiệt huyết:** Bạn là người có năng lượng dồi dào, luôn tràn đầy sức sống và nhiệt huyết trong mọi việc mình làm.\n*   **Quyết đoán, dám nghĩ dám làm:** Phá Quân tại Mệnh giúp bạn có tư duy đột phá, không ngại đối mặt với thử thách và sẵn sàng đưa ra những quyết định táo bạo.\n*   **Có chí tiến thủ:** Bạn luôn khao khát vươn lên, muốn khẳng định bản thân và không chấp nhận sự trì trệ.\n*   **Có trách nhiệm và uy quyền (khi về già):** Thiên Tướng tại Thân cho thấy bạn có khả năng gánh vác trách nhiệm, có thể trở thành người lãnh đạo hoặc có vị trí quan trọng trong xã hội, đặc biệt là khi bước vào những giai đoạn sau của cuộc đời.\n*   **Dễ nóng giận nhưng cũng dễ nguôi:** Tính cách Hỏa Lục Cục và Phá Quân có thể khiến bạn dễ nổi nóng, nhưng thường không giữ sự giận dữ lâu.\n*   **Thích sự mới mẻ, thay đổi:** Bạn không thích sự nhàm chán, luôn tìm kiếm những điều mới mẻ, những trải nghiệm khác biệt.\n\n**Cần lưu ý:** Đôi khi sự liều lĩnh của Phá Quân có thể dẫn đến những quyết định vội vàng, thiếu suy xét. Tính cách nóng nảy cần được tiết chế để tránh gây tổn thương cho bản thân và những người xung quanh.\n\n**3. Sự nghiệp và tài lộc**\n\n*   **Tiềm năng lớn, có thể thành công vang dội:** Với Phá Quân tại Mệnh và Thiên Tướng tại Thân, bạn có khả năng tạo dựng sự nghiệp từ con số 0 hoặc có những bước đột phá lớn. Bạn phù hợp với những công việc đòi hỏi sự sáng tạo, khả năng lãnh đạo, quản lý, hoặc những lĩnh vực có tính cạnh tranh cao.\n*   **Sự nghiệp có nhiều thăng trầm:** Cuộc đời sự nghiệp của bạn có thể sẽ trải qua nhiều biến động, có lúc thăng hoa, có lúc gặp khó khăn. Điều này đòi hỏi bạn phải có khả năng thích ứng và linh hoạt.\n*   **Tài lộc có thể đến bất ngờ:** Tiền bạc có thể đến từ nhiều nguồn, đôi khi là những cơ hội bất ngờ. Tuy nhiên, do tính cách của Phá Quân, bạn cũng có thể có xu hướng chi tiêu phóng khoáng hoặc đầu tư mạo hiểm.\n*   **Giai đoạn phát triển sự nghiệp và tài lộc mạnh mẽ:** Các đại vận [46,55] (Tài Bạch) và [36,45] (Tử Nữ) cho thấy đây là những giai đoạn quan trọng để bạn tích lũy tài sản và phát triển sự nghiệp. Cung Tài Bạch ở Dần là vị trí tốt, lại có sự hỗ trợ của các sao tốt, bạn có thể đạt được thành tựu đáng kể.\n*   **Cần quản lý tài chính cẩn thận:** Mặc dù có tiềm năng kiếm tiền, bạn cần chú ý đến việc quản lý tài chính, tránh những khoản đầu tư rủi ro hoặc chi tiêu quá đà.\n\n**4. Tình duyên và gia đạo**\n\n*   **Tình duyên có thể có nhiều thử thách:** Với Phá Quân tại Mệnh, tình duyên của bạn có thể không hoàn toàn êm đềm. Có thể có những hiểu lầm, mâu thuẫn hoặc những thay đổi bất ngờ trong các mối quan hệ.\n*   **Thiên Tướng tại Thân:** Khi về già hoặc ở giai đoạn sau của cuộc đời, bạn có thể có một cuộc sống gia đình ổn định và có vị thế nhất định.\n*   **Cung Phu Thê (Bính Thìn):** Cần xem xét kỹ các sao tọa thủ và các sao ảnh hưởng tại cung này để có nhận định chi tiết hơn về tình duyên. Tuy nhiên, nhìn chung, bạn cần học cách kiên nhẫn, bao dung và giao tiếp hiệu quả trong tình yêu.\n*   **Gia đạo:** Có thể có những lúc không khí gia đình không được hòa thuận do tính cách nóng nảy hoặc những biến động trong cuộc sống. Tuy nhiên, bạn là người có trách nhiệm và luôn mong muốn mang lại những điều tốt đẹp cho gia đình.\n\n**5. Sức khỏe**\n\n*   **Cung Tật Ách (Ất Sửu):** Cần xem xét kỹ các sao tọa thủ và các sao ảnh hưởng tại cung này để có nhận định chi tiết hơn về sức khỏe. Tuy nhiên, với Hỏa Lục Cục, bạn cần chú ý đến các vấn đề liên quan đến tim mạch, huyết áp, hoặc những bệnh liên quan đến hỏa khí.\n*   **Dễ bị căng thẳng:** Tính cách năng động và đôi khi bốc đồng có thể khiến bạn dễ bị căng thẳng, mệt mỏi.\n*   **Cần chú ý chế độ sinh hoạt:** Nên có chế độ ăn uống, nghỉ ngơi hợp lý, tránh làm việc quá sức và dành thời gian thư giãn để giữ gìn sức khỏe.\n\n**6. Lời khuyên**\n\n*   **Kiểm soát cảm xúc:** Hãy học cách kiềm chế sự nóng nảy, suy nghĩ kỹ trước khi hành động để tránh những quyết định sai lầm hoặc gây tổn thương cho người khác.\n*   **Cân bằng giữa sự bứt phá và sự ổn định:** Phá Quân mang đến sự sáng tạo và đột phá, nhưng Thiên Tướng lại cần sự ổn định và trách nhiệm. Hãy tìm cách dung hòa hai yếu tố này.\n*   **Quản lý tài chính thông minh:** Đừng để sự hào phóng hoặc tính mạo hiểm ảnh hưởng đến tài lộc của bạn. Hãy lập kế hoạch tài chính rõ ràng và đầu tư một cách khôn ngoan.\n*   **Tập trung vào phát triển bản thân:** Luôn học hỏi, trau dồi kiến thức và kỹ năng để thích ứng với những thay đổi của cuộc sống và sự nghiệp.\n*   **Xây dựng mối quan hệ chân thành:** Dù có những thử thách trong tình duyên, hãy cố gắng xây dựng mối quan hệ dựa trên sự chân thành, thấu hiểu và tôn trọng lẫn nhau.\n*   **Chăm sóc sức khỏe:** Đừng quên dành thời gian cho bản thân, chú trọng đến sức khỏe thể chất và tinh thần.\n\nLá số của bạn có nhiều tiềm năng phát triển, nhưng cũng đòi hỏi sự nỗ lực và điều chỉnh bản thân. Chúc bạn luôn mạnh khỏe, thành công và hạnh phúc!",
};
