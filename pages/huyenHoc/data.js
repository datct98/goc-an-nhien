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

export const mockDataYear = {
    "name": "Hoàng",
    "birthDate": "2000-1-1",
    "lunarDate": "Ngày 25 tháng 11 năm 1999",
    "zodiac": "Mèo",
    "sign": "Cung Ma Kết",
    "fiveElementsClass": "Hỏa Lục Cục",
    "type": "yearly",
    "palaces": [
        {
            "name": "Điền Trạch",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Bính",
            "earthlyBranch": "Dần",
            "majorStars": [],
            "minorStars": [
                "Tả Phù"
            ],
            "adjectiveStars": [
                "Tam Thai",
                "Thiên Tài",
                "Thiên Vu",
                "Thiên Phúc"
            ],
            "changsheng12": "Trường Sinh",
            "boshi12": "Tướng Quân",
            "jiangqian12": "Vong Thần",
            "suiqian12": "Bệnh Phù",
            "thaiTue12": "Bệnh Phù",
            "tuongQuan12": "Thiên Sát",
            "month": "T.1",
            "decadal": {
                "range": [
                    96,
                    105
                ],
                "heavenlyStem": "Bính",
                "earthlyBranch": "Dần"
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
            "name": "Quan Lộc",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Đinh",
            "earthlyBranch": "Mão",
            "majorStars": [
                "Thiên Phủ(Đắc)"
            ],
            "minorStars": [],
            "adjectiveStars": [
                "Phong Cáo",
                "Thiên Khốc"
            ],
            "changsheng12": "Dưỡng",
            "boshi12": "Tiểu Hao",
            "jiangqian12": "Tướng Tinh",
            "suiqian12": "Tuế Kiện",
            "thaiTue12": "Thái Tuế",
            "tuongQuan12": "Tai Sát",
            "month": "T.2",
            "decadal": {
                "range": [
                    86,
                    95
                ],
                "heavenlyStem": "Đinh",
                "earthlyBranch": "Mão"
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
            "name": "Nô Bộc",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Mậu",
            "earthlyBranch": "Thìn",
            "majorStars": [
                "Thái Âm(Hạn)"
            ],
            "minorStars": [],
            "adjectiveStars": [
                "Thiên Quý",
                "Thiên Thọ",
                "Thiên Không",
                "Thiên Thương"
            ],
            "changsheng12": "Thai",
            "boshi12": "Thanh Long",
            "jiangqian12": "Phan Án",
            "suiqian12": "Hối Khí",
            "thaiTue12": "Thiếu Dương",
            "tuongQuan12": "Kiếp Sát",
            "month": "T.3",
            "decadal": {
                "range": [
                    76,
                    85
                ],
                "heavenlyStem": "Mậu",
                "earthlyBranch": "Thìn"
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
            "name": "Thiên Di",
            "isBodyPalace": false,
            "isOriginalPalace": true,
            "heavenlyStem": "Kỷ",
            "earthlyBranch": "Tỵ",
            "majorStars": [
                "Liêm Trinh(Hạn)",
                "Tham Lang(Hạn)"
            ],
            "minorStars": [
                "Văn Khúc(Miếu)",
                "Thiên Mã",
                "Đà La(Hạn)"
            ],
            "adjectiveStars": [
                "Cô Thần",
                "Phi Liêm",
                "Phá Toái"
            ],
            "changsheng12": "Tuyệt",
            "boshi12": "Lực Sỹ",
            "jiangqian12": "Tuế Dịch",
            "suiqian12": "Tang Môn",
            "thaiTue12": "Tang Môn",
            "tuongQuan12": "Hoa Cái",
            "month": "T.4",
            "decadal": {
                "range": [
                    66,
                    75
                ],
                "heavenlyStem": "Kỷ",
                "earthlyBranch": "Tỵ"
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
            "name": "Tật Ách",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Canh",
            "earthlyBranch": "Ngọ",
            "majorStars": [
                "Cự Môn(Vượng)"
            ],
            "minorStars": [
                "Lộc Tồn"
            ],
            "adjectiveStars": [
                "Thiên Hỷ",
                "Giải Thần",
                "Âm Sát",
                "Thiên Sứ"
            ],
            "changsheng12": "Mộ",
            "boshi12": "Bác Sỹ",
            "jiangqian12": "Tức Thần",
            "suiqian12": "Quán Tác",
            "thaiTue12": "Thiếu Âm",
            "tuongQuan12": "Tức Thần",
            "month": "T.5",
            "decadal": {
                "range": [
                    56,
                    65
                ],
                "heavenlyStem": "Canh",
                "earthlyBranch": "Ngọ"
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
            "name": "Tài Bạch",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Tân",
            "earthlyBranch": "Mùi",
            "majorStars": [
                "Thiên Tướng(Đắc)"
            ],
            "minorStars": [
                "Kình Dương(Miếu)"
            ],
            "adjectiveStars": [
                "Long Trì",
                "Phụng Các",
                "Đài Phụ",
                "Hoa Cái",
                "Thiên Hình",
                "Niên Giải"
            ],
            "changsheng12": "Tử",
            "boshi12": "Quan Phủ",
            "jiangqian12": "Hoa Cái",
            "suiqian12": "Quan Phù",
            "thaiTue12": "Quan Phù",
            "tuongQuan12": "Tuế Dịch",
            "month": "T.6",
            "decadal": {
                "range": [
                    46,
                    55
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
            "name": "Tử Nữ",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Nhâm",
            "earthlyBranch": "Thân",
            "majorStars": [
                "Thiên Đồng(Vượng)",
                "Thiên Lương(Hạn)"
            ],
            "minorStars": [
                "Thiên Việt"
            ],
            "adjectiveStars": [
                "Ân Quang",
                "Thiên Trù",
                "Nguyệt Đức",
                "Triệt Lộ"
            ],
            "changsheng12": "Bệnh",
            "boshi12": "Phục Binh",
            "jiangqian12": "Kiếp Sát",
            "suiqian12": "Tiểu Hao",
            "thaiTue12": "Tử Phù",
            "tuongQuan12": "Phan Án",
            "month": "T.7",
            "decadal": {
                "range": [
                    36,
                    45
                ],
                "heavenlyStem": "Nhâm",
                "earthlyBranch": "Thân"
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
            "name": "Phu Thê",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Quý",
            "earthlyBranch": "Dậu",
            "majorStars": [
                "Vũ Khúc(Lợi)",
                "Thất Sát(Miếu)"
            ],
            "minorStars": [
                "Văn Xương(Miếu)"
            ],
            "adjectiveStars": [
                "Thiên Quan",
                "Tuần Không",
                "Không Vong",
                "Thiên Hư"
            ],
            "changsheng12": "Suy",
            "boshi12": "Đại Hao",
            "jiangqian12": "Tai Sát",
            "suiqian12": "Đại Hao",
            "thaiTue12": "Tuế Phá",
            "tuongQuan12": "Tướng Quân",
            "month": "T.8",
            "decadal": {
                "range": [
                    26,
                    35
                ],
                "heavenlyStem": "Quý",
                "earthlyBranch": "Dậu"
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
            "name": "Huynh Đệ",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Giáp",
            "earthlyBranch": "Tuất",
            "majorStars": [
                "Thái Dương(Bất)"
            ],
            "minorStars": [
                "Địa Không",
                "Hỏa Tinh(Miếu)"
            ],
            "adjectiveStars": [
                "Thiên Nguyệt"
            ],
            "changsheng12": "Đế Vượng",
            "boshi12": "Bệnh Phù",
            "jiangqian12": "Thiên Sát",
            "suiqian12": "Long Đức",
            "thaiTue12": "Long Đức",
            "tuongQuan12": "Vong Thần",
            "month": "T.9",
            "decadal": {
                "range": [
                    16,
                    25
                ],
                "heavenlyStem": "Giáp",
                "earthlyBranch": "Tuất"
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
            "name": "Mệnh",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Ất",
            "earthlyBranch": "Hợi",
            "majorStars": [],
            "minorStars": [
                "Linh Tinh(Lợi)"
            ],
            "adjectiveStars": [
                "Thiên Diêu"
            ],
            "changsheng12": "Lâm Quan",
            "boshi12": "Hỷ Thần",
            "jiangqian12": "Chỉ Bối",
            "suiqian12": "Bạch Hổ",
            "thaiTue12": "Bạch Hổ",
            "tuongQuan12": "Nguyệt Sát",
            "month": "T.10",
            "decadal": {
                "range": [
                    6,
                    15
                ],
                "heavenlyStem": "Ất",
                "earthlyBranch": "Hợi"
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
            "name": "Phụ Mẫu",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Bính",
            "earthlyBranch": "Tý",
            "majorStars": [
                "Thiên Cơ(Miếu)"
            ],
            "minorStars": [
                "Hữu Bật",
                "Thiên Khôi",
                "Địa Kiếp"
            ],
            "adjectiveStars": [
                "Hồng Loan",
                "Hàm Trì",
                "Bát Tọa",
                "Thiên Đức",
                "Đào Hoa"
            ],
            "changsheng12": "Quan Đới",
            "boshi12": "Phi Liêm",
            "jiangqian12": "Hàm Trì",
            "suiqian12": "Thiên Đức",
            "thaiTue12": "Phúc Đức",
            "tuongQuan12": "Hàm Trì",
            "month": "T.11",
            "decadal": {
                "range": [
                    116,
                    125
                ],
                "heavenlyStem": "Bính",
                "earthlyBranch": "Tý"
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
            "name": "Phúc Đức",
            "isBodyPalace": true,
            "isOriginalPalace": false,
            "heavenlyStem": "Đinh",
            "earthlyBranch": "Sửu",
            "majorStars": [
                "Tử Vi(Miếu)",
                "Phá Quân(Vượng)"
            ],
            "minorStars": [],
            "adjectiveStars": [
                "Quả Tú"
            ],
            "changsheng12": "Mục Dục",
            "boshi12": "Tấu Thư",
            "jiangqian12": "Nguyệt Sát",
            "suiqian12": "Điếu Khách",
            "thaiTue12": "Điếu Khách",
            "tuongQuan12": "Chỉ Bối",
            "month": "T.12",
            "decadal": {
                "range": [
                    106,
                    115
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
    "decadal": {
        "name": "Đại Hạn",
        "heavenlyStem": "Quý",
        "earthlyBranch": "Dậu",
        "mutagen": [
            "Phá Quân",
            "Cự Môn",
            "Thái Âm",
            "Tham Lang"
        ]
    },
    "age": {
        "index": 10,
        "nominalAge": 26,
        "name": "Tiểu Hạn",
        "heavenlyStem": "Bính",
        "earthlyBranch": "Tý",
        "palaceNames": [
            "Phúc Đức",
            "Điền Trạch",
            "Quan Lộc",
            "Nô Bộc",
            "Thiên Di",
            "Tật Ách",
            "Tài Bạch",
            "Tử Nữ",
            "Phu Thê",
            "Huynh Đệ",
            "Mệnh",
            "Phụ Mẫu"
        ],
        "mutagen": [
            "Thiên Đồng",
            "Thiên Cơ",
            "Văn Xương",
            "Liêm Trinh"
        ]
    },
    "yearly": {
        "name": "Lưu Niên",
        "heavenlyStem": "Giáp",
        "earthlyBranch": "Thìn",
        "mutagen": [
            "Liêm Trinh",
            "Phá Quân",
            "Vũ Khúc",
            "Thái Dương"
        ]
    },
    "months": [
        {
            "month": 1,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Đinh",
            "earthlyBranch": "Sửu",
            "mutagen": [
                "Thái Âm",
                "Thiên Đồng",
                "Thiên Cơ",
                "Cự Môn"
            ]
        },
        {
            "month": 2,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Mậu",
            "earthlyBranch": "Dần",
            "mutagen": [
                "Tham Lang",
                "Thái Âm",
                "Hữu Bật",
                "Thiên Cơ"
            ]
        },
        {
            "month": 3,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Kỷ",
            "earthlyBranch": "Mão",
            "mutagen": [
                "Vũ Khúc",
                "Tham Lang",
                "Thiên Lương",
                "Văn Khúc"
            ]
        },
        {
            "month": 4,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Canh",
            "earthlyBranch": "Thìn",
            "mutagen": [
                "Thái Dương",
                "Vũ Khúc",
                "Thái Âm",
                "Thiên Đồng"
            ]
        },
        {
            "month": 5,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Tân",
            "earthlyBranch": "Tỵ",
            "mutagen": [
                "Cự Môn",
                "Thái Dương",
                "Văn Khúc",
                "Văn Xương"
            ]
        },
        {
            "month": 6,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Nhâm",
            "earthlyBranch": "Ngọ",
            "mutagen": [
                "Thiên Lương",
                "Tử Vi",
                "Tả Phù",
                "Vũ Khúc"
            ]
        },
        {
            "month": 7,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Quý",
            "earthlyBranch": "Mùi",
            "mutagen": [
                "Phá Quân",
                "Cự Môn",
                "Thái Âm",
                "Tham Lang"
            ]
        },
        {
            "month": 8,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Giáp",
            "earthlyBranch": "Thân",
            "mutagen": [
                "Liêm Trinh",
                "Phá Quân",
                "Vũ Khúc",
                "Thái Dương"
            ]
        },
        {
            "month": 9,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Giáp",
            "earthlyBranch": "Thân",
            "mutagen": [
                "Liêm Trinh",
                "Phá Quân",
                "Vũ Khúc",
                "Thái Dương"
            ]
        },
        {
            "month": 10,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Ất",
            "earthlyBranch": "Dậu",
            "mutagen": [
                "Thiên Cơ",
                "Thiên Lương",
                "Tử Vi",
                "Thái Âm"
            ]
        },
        {
            "month": 11,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Bính",
            "earthlyBranch": "Tuất",
            "mutagen": [
                "Thiên Đồng",
                "Thiên Cơ",
                "Văn Xương",
                "Liêm Trinh"
            ]
        },
        {
            "month": 12,
            "name": "Lưu Nguyệt",
            "heavenlyStem": "Đinh",
            "earthlyBranch": "Hợi",
            "mutagen": [
                "Thái Âm",
                "Thiên Đồng",
                "Thiên Cơ",
                "Cự Môn"
            ]
        }
    ],
    "interpretation": "## 1. ĐẠI HẠN HIỆN TẠI (Quý Dậu - Phá Quân, Cự Môn, Thái Âm, Tham Lang)\nBạn đang trong đại hạn **Quý Dậu**, cung Phu Thê có **Vũ Khúc(Lợi)**, **Thất Sát(Miếu)**, **Văn Xương(Miếu)**. Đây là giai đoạn biến động mạnh về quan hệ đối tác, hôn nhân và sự nghiệp. Tứ hóa đại hạn: **Phá Quân** hóa Lộc, **Cự Môn** hóa Quyền, **Thái Âm** hóa Khoa, **Tham Lang** hóa Kỵ – cho thấy có cơ hội phát triển nhưng phải đối mặt với tham vọng quá lớn (Tham Lang hóa Kỵ).\n\n## 2. LƯU NIÊN GIÁP THÌN (2025)\n- **Thiên can Giáp**: **Liêm Trinh** hóa Lộc, **Phá Quân** hóa Quyền, **Vũ Khúc** hóa Khoa, **Thái Dương** hóa Kỵ.\n- **Lưu niên cung Thìn** trùng với cung Nô Bộc của mệnh bàn, có **Thái Âm(Hạn)** và **Địa Không**, **Hỏa Tinh(Miếu)** từ cung Huynh Đệ chiếu sang.\n\n**Tổng quan:** Năm 2025, Thái Dương hóa Kỵ chiếu vào cung Huynh Đệ (**Thái Dương(Bất)**, Địa Không, Hỏa Tinh(Miếu)) gây bất lợi cho các mối quan hệ anh em, bạn bè, dễ xảy ra tranh cãi, mâu thuẫn. Liêm Trinh hóa Lộc tại cung Thiên Di (**Liêm Trinh(Hạn)**, Tham Lang(Hạn), Văn Khúc(Miếu), Thiên Mã, Đà La(Hạn)) cho thấy có quý nhân phương xa, nhưng Đà La(Hạn) gây tai tiểu nhân, đi xa cẩn thận tai nạn.\n\nSự nghiệp: Vũ Khúc hóa Khoa tại cung Phu Thê (**Vũ Khúc(Lợi)**) hỗ trợ từ đối tác. Phá Quân hóa Quyền tại cung Phúc Đức (**Tử Vi(Miếu)**, Phá Quân(Vượng)) – có khả năng thay đổi lớn, nhưng phải cẩn trọng vì Tham Lang hóa Kỵ đại hạn dễ dẫn đến quyết định liều lĩnh.\n\n## 3. PHÂN TÍCH TỪNG THÁNG\n\n**Tháng 1 (Đinh Sửu):** Thái Âm, Thiên Đồng, Thiên Cơ, Cự Môn – cung Phúc Đức. Công việc có thay đổi nhẹ, tâm lý an toàn, nhưng Cự Môn gây nhiều suy tư. Tốt cho việc nghỉ ngơi.\n\n**Tháng 2 (Mậu Dần):** Tham Lang, Thái Âm, Hữu Bật, Thiên Cơ – cung Điền Trạch. Có thể chi tiêu lớn cho nhà cửa. Tài lộc không ổn định.\n\n**Tháng 3 (Kỷ Mão):** Vũ Khúc, Tham Lang, Thiên Lương, Văn Khúc – cung Quan Lộc. **Tháng tốt nhất** cho sự nghiệp: Vũ Khúc và Tham Lang đồng cung, Thiên Lương giải trừ khó khăn, Văn Khúc mang lại cơ hội qua văn thư, hợp đồng.\n\n**Tháng 4 (Canh Thìn):** Thái Dương, Vũ Khúc, Thái Âm, Thiên Đồng – cung Nô Bộc. Dễ bị bạn bè làm ảnh hưởng tài chính. Thái Dương hóa Kỵ năm hiện rõ: hao tán.\n\n**Tháng 5 (Tân Tỵ):** Cự Môn, Thái Dương, Văn Khúc, Văn Xương – cung Thiên Di. Ra ngoài gặp thị phi miệng lưỡi (Cự Môn), nhưng nhờ Văn Khúc, Văn Xương nên vẫn có lý lẽ.\n\n**Tháng 6 (Nhâm Ngọ):** Thiên Lương, Tử Vi, Tả Phù, Vũ Khúc – cung Tật Ách. Sức khỏe có vấn đề nhẹ (đau đầu, tiêu hóa). Tử Vi + Thiên Lương giúp đỡ nhưng không mạnh.\n\n**Tháng 7 (Quý Mùi):** Phá Quân, Cự Môn, Thái Âm, Tham Lang – trùng với tứ hóa đại hạn. **Tháng xấu nhất**, vì Tham Lang hóa Kỵ đại hạn xuất hiện, dễ thất bại trong đầu tư, cãi nhau trong gia đình.\n\n**Tháng 8 (Giáp Thân):** Liêm Trinh, Phá Quân, Vũ Khúc, Thái Dương – trùng lưu niên. Cơ hội đột phá nhưng Thái Dương hóa Kỵ làm tổn hao tiền bạc nếu mở rộng quá nhanh.\n\n**Tháng 9 (Giáp Thân):** lặp lại tháng 8 – cẩn trọng các quyết định mang tính bước ngoặt.\n\n**Tháng 10 (Ất Dậu):** Thiên Cơ, Thiên Lương, Tử Vi, Thái Âm – cung Phu Thê. Quan hệ vợ chồng hoặc đối tác êm ấm, có thay đổi chiến lược.\n\n**Tháng 11 (Bính Tuất):** Thiên Đồng, Thiên Cơ, Văn Xương, Liêm Trinh – cung Huynh Đệ. Anh em, bạn bè có tin vui, nhưng Liêm Trinh hóa Lộc năm chưa hẳn đã có lợi vì cung xấu.\n\n**Tháng 12 (Đinh Hợi):** Thái Âm, Thiên Đồng, Thiên Cơ, Cự Môn – tương tự tháng 1. Kết thúc năm nhẹ nhàng, nên dành thời gian cho gia đình.\n\n## 4. LỜI KHUYÊN CỤ THỂ\n- **Sự nghiệp:** Tháng 3 (Kỷ Mão) là thời điểm vàng để ký kết, thăng tiến. Tránh thay đổi công việc lớn vào tháng 7 và tháng 8.\n- **Tài chính:** Không cho vay, đầu tư mạo hiểm trong tháng 4, tháng 7. Tiết kiệm dự phòng.\n- **Tình cảm:** Tháng 7 dễ cãi vã; tháng 10 hàn gắn tốt.\n- **Sức khỏe:** Đề phòng bệnh về tiêu hóa, gan mật (Cự Môn Vượng tại Tật Ách gốc, lưu niên tháng 6 có Tật Ách kích hoạt).",
    "summary": [
        {
            "name": "Sự nghiệp",
            "description": "Năm 2025 có tháng 3 (Kỷ Mão) rất tốt nhờ Vũ Khúc + Tham Lang + Thiên Lương tại Quan Lộc. Nhưng tháng 7 (Quý Mùi) xấu nhất do Tham Lang hóa Kỵ, không nên đột phá."
        },
        {
            "name": "Tài lộc",
            "description": "Lưu niên Thái Dương hóa Kỵ tại cung Huynh Đệ gây hao hụt do bạn bè, anh em. Tài chính cẩn trọng tháng 4 và tháng 7. Không đầu tư dài hạn trong năm."
        },
        {
            "name": "Tình duyên",
            "description": "Đại hạn tại Phu Thê (Vũ Khúc Lợi, Thất Sát Miếu, Văn Xương Miếu) cho thấy hôn nhân có thử thách nhưng văn xương giúp hòa giải. Tháng 10 (Ất Dậu) tốt cho quan hệ, tháng 7 dễ tranh cãi."
        },
        {
            "name": "Sức khỏe",
            "description": "Bản mệnh Cự Môn Vượng tại Tật Ách, lưu niên tháng 6 (Nhâm Ngọ) có Thiên Lương, Tử Vi, Vũ Khúc – bệnh nhẹ về tiêu hóa, đau đầu. Tránh căng thẳng tháng 7."
        },
        {
            "name": "Vận hạn tổng quan",
            "description": "Năm 2025 nhiều biến động nhưng không quá xấu nếu biết chọn thời điểm. Tháng 3 tốt nhất, tháng 7 xấu nhất. Lưu niên Giáp làm Liêm Trinh hóa Lộc nơi Thiên Di – quý nhân xa giúp đỡ, nhưng Thái Dương hóa Kỵ gây hao tài khẩu thiệt. Đại hạn Quý Dậu với Tham Lang hóa Kỵ cảnh báo tham vọng quá đà."
        }
    ],
    "advice": "Năm 2025 có tháng 3 (Kỷ Mão) rất tốt nhờ Vũ Khúc + Tham Lang + Thiên Lương tại Quan Lộc. Nhưng tháng 7 (Quý Mùi) xấu nhất do Tham Lang hóa Kỵ, không nên đột phá. Lưu niên Thái Dương hóa Kỵ tại cung Huynh Đệ gây hao hụt do bạn bè, anh em. Tài chính cẩn trọng tháng 4 và tháng 7. Không đầu tư dài hạn trong năm. Đại hạn tại Phu Thê (Vũ Khúc Lợi, Thất Sát Miếu, Văn Xương Miếu) cho thấy hôn nhân có thử thách nhưng văn xương giúp hòa giải. Tháng 10 (Ất Dậu) tốt cho quan hệ, tháng 7 dễ tranh cãi. Bản mệnh Cự Môn Vượng tại Tật Ách, lưu niên tháng 6 (Nhâm Ngọ) có Thiên Lương, Tử Vi, Vũ Khúc – bệnh nhẹ về tiêu hóa, đau đầu. Tránh căng thẳng tháng 7. Năm 2025 nhiều biến động nhưng không quá xấu nếu biết chọn thời điểm. Tháng 3 tốt nhất, tháng 7 xấu nhất. Lưu niên Giáp làm Liêm Trinh hóa Lộc nơi Thiên Di – quý nhân xa giúp đỡ, nhưng Thái Dương hóa Kỵ gây hao tài khẩu thiệt. Đại hạn Quý Dậu với Tham Lang hóa Kỵ cảnh báo tham vọng quá đà."
}



const mockDataMonth = {
    "name": "Hoàng ",
    "birthDate": "2000-1-1",
    "lunarDate": "Ngày 25 tháng 11 năm 1999",
    "zodiac": "Mèo",
    "sign": "Cung Ma Kết",
    "fiveElementsClass": "Hỏa Lục Cục",
    "type": "monthly",
    "palaces": [
        {
            "name": "Điền Trạch",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Bính",
            "earthlyBranch": "Dần",
            "majorStars": [],
            "minorStars": [
                "Tả Phù"
            ],
            "adjectiveStars": [
                "Tam Thai",
                "Thiên Tài",
                "Thiên Vu",
                "Thiên Phúc"
            ],
            "changsheng12": "Trường Sinh",
            "boshi12": "Tướng Quân",
            "jiangqian12": "Vong Thần",
            "suiqian12": "Bệnh Phù",
            "thaiTue12": "Bệnh Phù",
            "tuongQuan12": "Thiên Sát",
            "month": "T.1",
            "decadal": {
                "range": [
                    96,
                    105
                ],
                "heavenlyStem": "Bính",
                "earthlyBranch": "Dần"
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
            "name": "Quan Lộc",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Đinh",
            "earthlyBranch": "Mão",
            "majorStars": [
                "Thiên Phủ(Đắc)"
            ],
            "minorStars": [],
            "adjectiveStars": [
                "Phong Cáo",
                "Thiên Khốc"
            ],
            "changsheng12": "Dưỡng",
            "boshi12": "Tiểu Hao",
            "jiangqian12": "Tướng Tinh",
            "suiqian12": "Tuế Kiện",
            "thaiTue12": "Thái Tuế",
            "tuongQuan12": "Tai Sát",
            "month": "T.2",
            "decadal": {
                "range": [
                    86,
                    95
                ],
                "heavenlyStem": "Đinh",
                "earthlyBranch": "Mão"
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
            "name": "Nô Bộc",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Mậu",
            "earthlyBranch": "Thìn",
            "majorStars": [
                "Thái Âm(Hạn)"
            ],
            "minorStars": [],
            "adjectiveStars": [
                "Thiên Quý",
                "Thiên Thọ",
                "Thiên Không",
                "Thiên Thương"
            ],
            "changsheng12": "Thai",
            "boshi12": "Thanh Long",
            "jiangqian12": "Phan Án",
            "suiqian12": "Hối Khí",
            "thaiTue12": "Thiếu Dương",
            "tuongQuan12": "Kiếp Sát",
            "month": "T.3",
            "decadal": {
                "range": [
                    76,
                    85
                ],
                "heavenlyStem": "Mậu",
                "earthlyBranch": "Thìn"
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
            "name": "Thiên Di",
            "isBodyPalace": false,
            "isOriginalPalace": true,
            "heavenlyStem": "Kỷ",
            "earthlyBranch": "Tỵ",
            "majorStars": [
                "Liêm Trinh(Hạn)",
                "Tham Lang(Hạn)"
            ],
            "minorStars": [
                "Văn Khúc(Miếu)",
                "Thiên Mã",
                "Đà La(Hạn)"
            ],
            "adjectiveStars": [
                "Cô Thần",
                "Phi Liêm",
                "Phá Toái"
            ],
            "changsheng12": "Tuyệt",
            "boshi12": "Lực Sỹ",
            "jiangqian12": "Tuế Dịch",
            "suiqian12": "Tang Môn",
            "thaiTue12": "Tang Môn",
            "tuongQuan12": "Hoa Cái",
            "month": "T.4",
            "decadal": {
                "range": [
                    66,
                    75
                ],
                "heavenlyStem": "Kỷ",
                "earthlyBranch": "Tỵ"
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
            "name": "Tật Ách",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Canh",
            "earthlyBranch": "Ngọ",
            "majorStars": [
                "Cự Môn(Vượng)"
            ],
            "minorStars": [
                "Lộc Tồn"
            ],
            "adjectiveStars": [
                "Thiên Hỷ",
                "Giải Thần",
                "Âm Sát",
                "Thiên Sứ"
            ],
            "changsheng12": "Mộ",
            "boshi12": "Bác Sỹ",
            "jiangqian12": "Tức Thần",
            "suiqian12": "Quán Tác",
            "thaiTue12": "Thiếu Âm",
            "tuongQuan12": "Tức Thần",
            "month": "T.5",
            "decadal": {
                "range": [
                    56,
                    65
                ],
                "heavenlyStem": "Canh",
                "earthlyBranch": "Ngọ"
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
            "name": "Tài Bạch",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Tân",
            "earthlyBranch": "Mùi",
            "majorStars": [
                "Thiên Tướng(Đắc)"
            ],
            "minorStars": [
                "Kình Dương(Miếu)"
            ],
            "adjectiveStars": [
                "Long Trì",
                "Phụng Các",
                "Đài Phụ",
                "Hoa Cái",
                "Thiên Hình",
                "Niên Giải"
            ],
            "changsheng12": "Tử",
            "boshi12": "Quan Phủ",
            "jiangqian12": "Hoa Cái",
            "suiqian12": "Quan Phù",
            "thaiTue12": "Quan Phù",
            "tuongQuan12": "Tuế Dịch",
            "month": "T.6",
            "decadal": {
                "range": [
                    46,
                    55
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
            "name": "Tử Nữ",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Nhâm",
            "earthlyBranch": "Thân",
            "majorStars": [
                "Thiên Đồng(Vượng)",
                "Thiên Lương(Hạn)"
            ],
            "minorStars": [
                "Thiên Việt"
            ],
            "adjectiveStars": [
                "Ân Quang",
                "Thiên Trù",
                "Nguyệt Đức",
                "Triệt Lộ"
            ],
            "changsheng12": "Bệnh",
            "boshi12": "Phục Binh",
            "jiangqian12": "Kiếp Sát",
            "suiqian12": "Tiểu Hao",
            "thaiTue12": "Tử Phù",
            "tuongQuan12": "Phan Án",
            "month": "T.7",
            "decadal": {
                "range": [
                    36,
                    45
                ],
                "heavenlyStem": "Nhâm",
                "earthlyBranch": "Thân"
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
            "name": "Phu Thê",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Quý",
            "earthlyBranch": "Dậu",
            "majorStars": [
                "Vũ Khúc(Lợi)",
                "Thất Sát(Miếu)"
            ],
            "minorStars": [
                "Văn Xương(Miếu)"
            ],
            "adjectiveStars": [
                "Thiên Quan",
                "Tuần Không",
                "Không Vong",
                "Thiên Hư"
            ],
            "changsheng12": "Suy",
            "boshi12": "Đại Hao",
            "jiangqian12": "Tai Sát",
            "suiqian12": "Đại Hao",
            "thaiTue12": "Tuế Phá",
            "tuongQuan12": "Tướng Quân",
            "month": "T.8",
            "decadal": {
                "range": [
                    26,
                    35
                ],
                "heavenlyStem": "Quý",
                "earthlyBranch": "Dậu"
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
            "name": "Huynh Đệ",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Giáp",
            "earthlyBranch": "Tuất",
            "majorStars": [
                "Thái Dương(Bất)"
            ],
            "minorStars": [
                "Địa Không",
                "Hỏa Tinh(Miếu)"
            ],
            "adjectiveStars": [
                "Thiên Nguyệt"
            ],
            "changsheng12": "Đế Vượng",
            "boshi12": "Bệnh Phù",
            "jiangqian12": "Thiên Sát",
            "suiqian12": "Long Đức",
            "thaiTue12": "Long Đức",
            "tuongQuan12": "Vong Thần",
            "month": "T.9",
            "decadal": {
                "range": [
                    16,
                    25
                ],
                "heavenlyStem": "Giáp",
                "earthlyBranch": "Tuất"
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
            "name": "Mệnh",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Ất",
            "earthlyBranch": "Hợi",
            "majorStars": [],
            "minorStars": [
                "Linh Tinh(Lợi)"
            ],
            "adjectiveStars": [
                "Thiên Diêu"
            ],
            "changsheng12": "Lâm Quan",
            "boshi12": "Hỷ Thần",
            "jiangqian12": "Chỉ Bối",
            "suiqian12": "Bạch Hổ",
            "thaiTue12": "Bạch Hổ",
            "tuongQuan12": "Nguyệt Sát",
            "month": "T.10",
            "decadal": {
                "range": [
                    6,
                    15
                ],
                "heavenlyStem": "Ất",
                "earthlyBranch": "Hợi"
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
            "name": "Phụ Mẫu",
            "isBodyPalace": false,
            "isOriginalPalace": false,
            "heavenlyStem": "Bính",
            "earthlyBranch": "Tý",
            "majorStars": [
                "Thiên Cơ(Miếu)"
            ],
            "minorStars": [
                "Hữu Bật",
                "Thiên Khôi",
                "Địa Kiếp"
            ],
            "adjectiveStars": [
                "Hồng Loan",
                "Hàm Trì",
                "Bát Tọa",
                "Thiên Đức",
                "Đào Hoa"
            ],
            "changsheng12": "Quan Đới",
            "boshi12": "Phi Liêm",
            "jiangqian12": "Hàm Trì",
            "suiqian12": "Thiên Đức",
            "thaiTue12": "Phúc Đức",
            "tuongQuan12": "Hàm Trì",
            "month": "T.11",
            "decadal": {
                "range": [
                    116,
                    125
                ],
                "heavenlyStem": "Bính",
                "earthlyBranch": "Tý"
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
            "name": "Phúc Đức",
            "isBodyPalace": true,
            "isOriginalPalace": false,
            "heavenlyStem": "Đinh",
            "earthlyBranch": "Sửu",
            "majorStars": [
                "Tử Vi(Miếu)",
                "Phá Quân(Vượng)"
            ],
            "minorStars": [],
            "adjectiveStars": [
                "Quả Tú"
            ],
            "changsheng12": "Mục Dục",
            "boshi12": "Tấu Thư",
            "jiangqian12": "Nguyệt Sát",
            "suiqian12": "Điếu Khách",
            "thaiTue12": "Điếu Khách",
            "tuongQuan12": "Chỉ Bối",
            "month": "T.12",
            "decadal": {
                "range": [
                    106,
                    115
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
    "decadal": {
        "name": "Đại Hạn",
        "heavenlyStem": "Quý",
        "earthlyBranch": "Dậu",
        "mutagen": [
            "Phá Quân",
            "Cự Môn",
            "Thái Âm",
            "Tham Lang"
        ]
    },
    "age": {
        "index": 8,
        "nominalAge": 28,
        "name": "Tiểu Hạn",
        "heavenlyStem": "Giáp",
        "earthlyBranch": "Tuất",
        "palaceNames": [
            "Quan Lộc",
            "Nô Bộc",
            "Thiên Di",
            "Tật Ách",
            "Tài Bạch",
            "Tử Nữ",
            "Phu Thê",
            "Huynh Đệ",
            "Mệnh",
            "Phụ Mẫu",
            "Phúc Đức",
            "Điền Trạch"
        ],
        "mutagen": [
            "Liêm Trinh",
            "Phá Quân",
            "Vũ Khúc",
            "Thái Dương"
        ]
    },
    "yearly": {
        "name": "Lưu Niên",
        "heavenlyStem": "Bính",
        "earthlyBranch": "Ngọ",
        "mutagen": [
            "Thiên Đồng",
            "Thiên Cơ",
            "Văn Xương",
            "Liêm Trinh"
        ]
    },
    "monthly": {
        "name": "Lưu Nguyệt",
        "heavenlyStem": "Giáp",
        "earthlyBranch": "Ngọ",
        "mutagen": [
            "Liêm Trinh",
            "Phá Quân",
            "Vũ Khúc",
            "Thái Dương"
        ]
    },
    "days": [
        {
            "date": "2026-6-1",
            "name": "Lưu Nhật",
            "heavenlyStem": "Bính",
            "earthlyBranch": "Ngọ",
            "mutagen": [
                "Thiên Đồng",
                "Thiên Cơ",
                "Văn Xương",
                "Liêm Trinh"
            ]
        },
        {
            "date": "2026-6-2",
            "name": "Lưu Nhật",
            "heavenlyStem": "Đinh",
            "earthlyBranch": "Mùi",
            "mutagen": [
                "Thái Âm",
                "Thiên Đồng",
                "Thiên Cơ",
                "Cự Môn"
            ]
        },
        {
            "date": "2026-6-3",
            "name": "Lưu Nhật",
            "heavenlyStem": "Mậu",
            "earthlyBranch": "Thân",
            "mutagen": [
                "Tham Lang",
                "Thái Âm",
                "Hữu Bật",
                "Thiên Cơ"
            ]
        },
        {
            "date": "2026-6-4",
            "name": "Lưu Nhật",
            "heavenlyStem": "Kỷ",
            "earthlyBranch": "Dậu",
            "mutagen": [
                "Vũ Khúc",
                "Tham Lang",
                "Thiên Lương",
                "Văn Khúc"
            ]
        },
        {
            "date": "2026-6-5",
            "name": "Lưu Nhật",
            "heavenlyStem": "Canh",
            "earthlyBranch": "Tuất",
            "mutagen": [
                "Thái Dương",
                "Vũ Khúc",
                "Thái Âm",
                "Thiên Đồng"
            ]
        },
        {
            "date": "2026-6-6",
            "name": "Lưu Nhật",
            "heavenlyStem": "Tân",
            "earthlyBranch": "Hợi",
            "mutagen": [
                "Cự Môn",
                "Thái Dương",
                "Văn Khúc",
                "Văn Xương"
            ]
        },
        {
            "date": "2026-6-7",
            "name": "Lưu Nhật",
            "heavenlyStem": "Nhâm",
            "earthlyBranch": "Tý",
            "mutagen": [
                "Thiên Lương",
                "Tử Vi",
                "Tả Phù",
                "Vũ Khúc"
            ]
        },
        {
            "date": "2026-6-8",
            "name": "Lưu Nhật",
            "heavenlyStem": "Quý",
            "earthlyBranch": "Sửu",
            "mutagen": [
                "Phá Quân",
                "Cự Môn",
                "Thái Âm",
                "Tham Lang"
            ]
        },
        {
            "date": "2026-6-9",
            "name": "Lưu Nhật",
            "heavenlyStem": "Giáp",
            "earthlyBranch": "Dần",
            "mutagen": [
                "Liêm Trinh",
                "Phá Quân",
                "Vũ Khúc",
                "Thái Dương"
            ]
        },
        {
            "date": "2026-6-10",
            "name": "Lưu Nhật",
            "heavenlyStem": "Ất",
            "earthlyBranch": "Mão",
            "mutagen": [
                "Thiên Cơ",
                "Thiên Lương",
                "Tử Vi",
                "Thái Âm"
            ]
        },
        {
            "date": "2026-6-11",
            "name": "Lưu Nhật",
            "heavenlyStem": "Bính",
            "earthlyBranch": "Thìn",
            "mutagen": [
                "Thiên Đồng",
                "Thiên Cơ",
                "Văn Xương",
                "Liêm Trinh"
            ]
        },
        {
            "date": "2026-6-12",
            "name": "Lưu Nhật",
            "heavenlyStem": "Đinh",
            "earthlyBranch": "Tỵ",
            "mutagen": [
                "Thái Âm",
                "Thiên Đồng",
                "Thiên Cơ",
                "Cự Môn"
            ]
        },
        {
            "date": "2026-6-13",
            "name": "Lưu Nhật",
            "heavenlyStem": "Mậu",
            "earthlyBranch": "Ngọ",
            "mutagen": [
                "Tham Lang",
                "Thái Âm",
                "Hữu Bật",
                "Thiên Cơ"
            ]
        },
        {
            "date": "2026-6-14",
            "name": "Lưu Nhật",
            "heavenlyStem": "Kỷ",
            "earthlyBranch": "Mùi",
            "mutagen": [
                "Vũ Khúc",
                "Tham Lang",
                "Thiên Lương",
                "Văn Khúc"
            ]
        },
        {
            "date": "2026-6-15",
            "name": "Lưu Nhật",
            "heavenlyStem": "Canh",
            "earthlyBranch": "Thân",
            "mutagen": [
                "Thái Dương",
                "Vũ Khúc",
                "Thái Âm",
                "Thiên Đồng"
            ]
        },
        {
            "date": "2026-6-16",
            "name": "Lưu Nhật",
            "heavenlyStem": "Tân",
            "earthlyBranch": "Dậu",
            "mutagen": [
                "Cự Môn",
                "Thái Dương",
                "Văn Khúc",
                "Văn Xương"
            ]
        },
        {
            "date": "2026-6-17",
            "name": "Lưu Nhật",
            "heavenlyStem": "Nhâm",
            "earthlyBranch": "Tuất",
            "mutagen": [
                "Thiên Lương",
                "Tử Vi",
                "Tả Phù",
                "Vũ Khúc"
            ]
        },
        {
            "date": "2026-6-18",
            "name": "Lưu Nhật",
            "heavenlyStem": "Quý",
            "earthlyBranch": "Hợi",
            "mutagen": [
                "Phá Quân",
                "Cự Môn",
                "Thái Âm",
                "Tham Lang"
            ]
        },
        {
            "date": "2026-6-19",
            "name": "Lưu Nhật",
            "heavenlyStem": "Giáp",
            "earthlyBranch": "Tý",
            "mutagen": [
                "Liêm Trinh",
                "Phá Quân",
                "Vũ Khúc",
                "Thái Dương"
            ]
        },
        {
            "date": "2026-6-20",
            "name": "Lưu Nhật",
            "heavenlyStem": "Ất",
            "earthlyBranch": "Sửu",
            "mutagen": [
                "Thiên Cơ",
                "Thiên Lương",
                "Tử Vi",
                "Thái Âm"
            ]
        },
        {
            "date": "2026-6-21",
            "name": "Lưu Nhật",
            "heavenlyStem": "Bính",
            "earthlyBranch": "Dần",
            "mutagen": [
                "Thiên Đồng",
                "Thiên Cơ",
                "Văn Xương",
                "Liêm Trinh"
            ]
        },
        {
            "date": "2026-6-22",
            "name": "Lưu Nhật",
            "heavenlyStem": "Đinh",
            "earthlyBranch": "Mão",
            "mutagen": [
                "Thái Âm",
                "Thiên Đồng",
                "Thiên Cơ",
                "Cự Môn"
            ]
        },
        {
            "date": "2026-6-23",
            "name": "Lưu Nhật",
            "heavenlyStem": "Mậu",
            "earthlyBranch": "Thìn",
            "mutagen": [
                "Tham Lang",
                "Thái Âm",
                "Hữu Bật",
                "Thiên Cơ"
            ]
        },
        {
            "date": "2026-6-24",
            "name": "Lưu Nhật",
            "heavenlyStem": "Kỷ",
            "earthlyBranch": "Tỵ",
            "mutagen": [
                "Vũ Khúc",
                "Tham Lang",
                "Thiên Lương",
                "Văn Khúc"
            ]
        },
        {
            "date": "2026-6-25",
            "name": "Lưu Nhật",
            "heavenlyStem": "Canh",
            "earthlyBranch": "Ngọ",
            "mutagen": [
                "Thái Dương",
                "Vũ Khúc",
                "Thái Âm",
                "Thiên Đồng"
            ]
        },
        {
            "date": "2026-6-26",
            "name": "Lưu Nhật",
            "heavenlyStem": "Tân",
            "earthlyBranch": "Mùi",
            "mutagen": [
                "Cự Môn",
                "Thái Dương",
                "Văn Khúc",
                "Văn Xương"
            ]
        },
        {
            "date": "2026-6-27",
            "name": "Lưu Nhật",
            "heavenlyStem": "Nhâm",
            "earthlyBranch": "Thân",
            "mutagen": [
                "Thiên Lương",
                "Tử Vi",
                "Tả Phù",
                "Vũ Khúc"
            ]
        },
        {
            "date": "2026-6-28",
            "name": "Lưu Nhật",
            "heavenlyStem": "Quý",
            "earthlyBranch": "Dậu",
            "mutagen": [
                "Phá Quân",
                "Cự Môn",
                "Thái Âm",
                "Tham Lang"
            ]
        },
        {
            "date": "2026-6-29",
            "name": "Lưu Nhật",
            "heavenlyStem": "Giáp",
            "earthlyBranch": "Tuất",
            "mutagen": [
                "Liêm Trinh",
                "Phá Quân",
                "Vũ Khúc",
                "Thái Dương"
            ]
        },
        {
            "date": "2026-6-30",
            "name": "Lưu Nhật",
            "heavenlyStem": "Ất",
            "earthlyBranch": "Hợi",
            "mutagen": [
                "Thiên Cơ",
                "Thiên Lương",
                "Tử Vi",
                "Thái Âm"
            ]
        }
    ],
    "interpretation": "## 1. BỐI CẢNH VẬN HẠN THÁNG 6/2026\n\n**Đại hạn:** QuýDậu [Phá Quân, Cự Môn, Thái Âm, Tham Lang] – đang trong giai đoạn biến động mạnh, dễ thay đổi công việc, môi trường sống hoặc các mối quan hệ.\n\n**Lưu niên BínhNgọ** [Thiên Đồng, Thiên Cơ, Văn Xương, Liêm Trinh] – Thiên Đồng(Vượng) + Thiên Cơ(Miếu) tạo cơ hội thay đổi linh hoạt, nhưng Liêm Trinh(Hạn) tại lưu niên dễ gây thị phi, rắc rối pháp lý hoặc mâu thuẫn tình cảm.\n\n**Lưu nguyệt GiápNgọ** [Liêm Trinh, Phá Quân, Vũ Khúc, Thái Dương]:\n- **Tứ hóa lưu nguyệt:** Giáp → Liêm Trinh hóa Lộc, Phá Quân hóa Quyền, Vũ Khúc hóa Khoa, Thái Dương hóa Kỵ.\n- Liêm Trinh hóa Lộc tại lưu nguyệt → tiền bạc có lợi nhưng kèm thị phi.\n- Thái Dương hóa Kỵ (tại lưu nguyệt) → dễ hao tán về tiền bạc, quan hệ với nam giới hoặc cha không thuận.\n\n## 2. PHÂN TÍCH TỪNG NGÀY TRONG THÁNG\n\n### Tuần 1 (1–7/6):\n- **1/6 (BínhNgọ):** Lưu nhật trùng lưu niên – Thiên Đồng + Thiên Cơ + Văn Xương + Liêm Trinh. Công việc có tin vui, nhưng đề phòng lời nói gây hiểu lầm.\n- **3/6 (MậuThân):** Tham Lang + Thái Âm + Hữu Bật + Thiên Cơ. Dễ có cơ hội tài lộc từ hợp tác, tối kỵ ham chơi quá độ.\n- **7/6 (NhâmTý):** Thiên Lương + Tử Vi + Tả Phù + Vũ Khúc. **Ngày tốt nhất tuần 1**, giải quyết khó khăn cũ, được giúp đỡ.\n\n### Tuần 2 (8–14/6):\n- **8/6 (QuýSửu):** Phá Quân + Cự Môn + Thái Âm + Tham Lang – trùng đại hạn. **Ngày xấu nhất tháng**, dễ xung đột, mất tiền, tai nạn giao thông. Tuyệt đối không ký hợp đồng.\n- **11/6 (BínhThìn):** giống 1/6, lặp lại vận ngày trước, công việc tiến triển chậm nhưng ổn.\n\n### Tuần 3 (15–21/6):\n- **15/6 (CanhThân):** Thái Dương + Vũ Khúc + Thái Âm + Thiên Đồng. Thu nhập tốt nếu làm nghề liên quan phụ nữ hoặc tài chính.\n- **19/6 (GiápTý):** Liêm Trinh + Phá Quân + Vũ Khúc + Thái Dương – trùng lưu nguyệt hóa Lộc/Kỵ. Có lợi nhuận bất ngờ nhưng phải giữ tiền ngay sau đó.\n\n### Tuần 4 (22–30/6):\n- **22/6 (ĐinhMão):** Thái Âm + Thiên Đồng + Thiên Cơ + Cự Môn. Dễ buồn bực trong gia đình, cẩn thận giấy tờ nhà đất.\n- **28/6 (QuýDậu):** lặp lại ngày 8/6 – **ngày xấu thứ hai trong tháng**, không xuất hành xa, tránh cãi nhau với đàn ông.\n- **30/6 (ẤtHợi):** Thiên Cơ + Thiên Lương + Tử Vi + Thái Âm. Tốt để kết thúc tháng, giải quyết tồn đọng, định hướng mới.\n\n## 3. LỜI KHUYÊN THEO TỪNG LĨNH VỰC\n\n- **Sự nghiệp:** Ngày 7/6, 19/6 thuận lợi thăng tiến nhẹ; tuyệt đối không quyết định lớn vào 8/6, 28/6.\n- **Tài lộc:** Liêm Trinh hóa Lộc ở lưu nguyệt giúp có tiền bất chợt, nhưng Thái Dương hóa Kỵ gây thất thoát ngay sau – nên chi tiêu dè sẻn, không cho vay.\n- **Tình duyên / Gia đạo:** Đại hạn QuýDậu (Phu Thê có Vũ Khúc Lợi + Thất Sát Miếu) dễ căng thẳng. Những ngày có Cự Môn (6/6, 12/6, 22/6) dễ nóng giận, nên kiềm chế lời nói.\n- **Sức khỏe:** Tật Ách có Cự Môn Vượng + Lộc Tồn – sức khỏe nền tảng tốt. Tuy nhiên ngày xấu 8/6, 28/6 dễ bị đau dạ dày, đau đầu do stress.",
    "summary": [
        {
            "name": "Sự nghiệp",
            "description": "Biến động nhẹ, có cơ hội vào ngày 7/6 và 19/6 nhưng không nên thay đổi công việc lớn. Kiêng ký hợp đồng ngày 8/6 và 28/6."
        },
        {
            "name": "Tài lộc",
            "description": "Tháng có lộc bất ngờ nhờ Liêm Trinh hóa Lộc tại lưu nguyệt, nhưng Thái Dương hóa Kỵ gây hao tán. Không đầu tư dài hạn, tiền đến nhanh đi nhanh."
        },
        {
            "name": "Tình duyên",
            "description": "Căng thẳng do đại hạn QuýDậu và lưu nguyệt Thái Dương Kỵ. Các ngày có Cự Môn dễ cãi nhau. Giữ khoảng cách là tốt nhất."
        },
        {
            "name": "Sức khỏe",
            "description": "Nền tảng ổn nhờ Lộc Tồn tại Tật Ách. Ngày 8/6, 28/6 dễ mệt mỏi, đau bao tử. Chú ý ăn uống và nghỉ ngơi."
        },
        {
            "name": "Vận hạn tổng quan",
            "description": "Tháng 6/2026 có cả lộc và họa. Ngày tốt nhất: 7/6, 19/6, 30/6. Ngày xấu nhất: 8/6 và 28/6 – tuyệt đối tránh tranh chấp, xuất hành xa, ký kết quan trọng."
        }
    ],
    "advice": "Biến động nhẹ, có cơ hội vào ngày 7/6 và 19/6 nhưng không nên thay đổi công việc lớn. Kiêng ký hợp đồng ngày 8/6 và 28/6. Tháng có lộc bất ngờ nhờ Liêm Trinh hóa Lộc tại lưu nguyệt, nhưng Thái Dương hóa Kỵ gây hao tán. Không đầu tư dài hạn, tiền đến nhanh đi nhanh. Căng thẳng do đại hạn QuýDậu và lưu nguyệt Thái Dương Kỵ. Các ngày có Cự Môn dễ cãi nhau. Giữ khoảng cách là tốt nhất. Nền tảng ổn nhờ Lộc Tồn tại Tật Ách. Ngày 8/6, 28/6 dễ mệt mỏi, đau bao tử. Chú ý ăn uống và nghỉ ngơi. Tháng 6/2026 có cả lộc và họa. Ngày tốt nhất: 7/6, 19/6, 30/6. Ngày xấu nhất: 8/6 và 28/6 – tuyệt đối tránh tranh chấp, xuất hành xa, ký kết quan trọng."
}