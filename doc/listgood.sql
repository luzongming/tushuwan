/*
Navicat MySQL Data Transfer

Source Server         : 1809
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bookschina

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-01 18:41:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for listgood
-- ----------------------------
DROP TABLE IF EXISTS `listgood`;
CREATE TABLE `listgood` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  `pirce` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT NULL,
  `book` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `publishing` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=105 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of listgood
-- ----------------------------
INSERT INTO `listgood` VALUES ('1', '../img/l1.jpg', '9.90', '4.50', '22.00', '格拉长大', '阿来', '东方出版中心');
INSERT INTO `listgood` VALUES ('2', '../img/l2.jpg', '20.40', '7.30', '28.00', '山楂树之恋', '艾米著', '江苏人民出版社');
INSERT INTO `listgood` VALUES ('3', '../img/l3.jpg', '3.40', '2.10', '16.00', '钢铁是怎样炼成的', '尼·奥斯特洛夫斯基', '花山文艺出品');
INSERT INTO `listgood` VALUES ('4', '../img/l4.jpg', '11.20', '4.30', '26.00', '呼兰河传', '萧红', '巴蜀书社');
INSERT INTO `listgood` VALUES ('5', '../img/l5.jpg', '12.20', '5.60', '20.50', '温顾1942', '刘震云', '人民文学出版社');
INSERT INTO `listgood` VALUES ('6', '../img/l6.jpg', '32.20', '4.20', '40.80', '百年孤独', '马尔克斯/范晔', '南海出版公司');
INSERT INTO `listgood` VALUES ('7', '../img/l7.jpg', '17.40', '3.30', '30.80', '羊毛战纪', '美休', '湖南文艺出版社');
INSERT INTO `listgood` VALUES ('8', '../img/l8.jpg', '18.60', '8.00', '28.90', '无影灯', '渡边淳一', '文汇出版社');
INSERT INTO `listgood` VALUES ('9', '../img/l9.jpg', '9.80', '9.30', '10.00', '我不是潘金莲', '武大郎', '西门庆出版社');
INSERT INTO `listgood` VALUES ('10', '../img/l10.jpg', '99.10', '1.00', '999.00', 'HTML修仙记1', '渣渣辉1', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('11', '../img/l11.jpg', '100.10', '1.20', '1000.00', 'HTML修仙记2', '渣渣辉2', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('12', '../img/l12.jpg', '101.10', '1.30', '1001.00', 'HTML修仙记3', '渣渣辉3', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('13', '../img/l13.jpg', '102.10', '1.40', '1002.00', 'HTML修仙记4', '渣渣辉4', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('14', '../img/l14.jpg', '103.10', '1.50', '1003.00', 'HTML修仙记5', '渣渣辉5', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('15', '../img/l15.jpg', '104.10', '1.60', '1004.00', 'HTML修仙记6', '渣渣辉6', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('16', '../img/l16.jpg', '105.10', '1.70', '1005.00', 'HTML修仙记7', '渣渣辉7', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('17', '../img/l17.jpg', '106.10', '1.80', '1006.00', 'HTML修仙记8', '渣渣辉8', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('18', '../img/l18.jpg', '107.10', '1.90', '1007.00', 'HTML修仙记9', '渣渣辉9', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('19', '../img/l19.jpg', '108.10', '2.90', '1008.00', 'HTML修仙记10', '渣渣辉10', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('20', '../img/l20.jpg', '109.10', '3.90', '1009.00', 'HTML修仙记11', '渣渣辉11', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('21', '../img/l21.jpg', '110.10', '4.90', '1010.00', 'HTML修仙记12', '渣渣辉12', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('22', '../img/l22.jpg', '111.10', '5.90', '1011.00', 'HTML修仙记13', '渣渣辉13', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('23', '../img/l23.jpg', '112.10', '6.90', '1012.00', 'HTML修仙记14', '渣渣辉14', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('24', '../img/l24.jpg', '113.10', '7.90', '1013.00', 'HTML修仙记15', '渣渣辉15', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('25', '../img/l25.jpg', '114.10', '8.90', '1014.00', 'HTML修仙记16', '渣渣辉16', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('26', '../img/l26.jpg', '115.10', '9.90', '1015.00', 'HTML修仙记17', '渣渣辉17', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('27', '../img/l27.jpg', '116.10', '0.90', '1016.00', 'HTML修仙记18', '渣渣辉18', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('28', '../img/l28.jpg', '117.10', '1.90', '1017.00', 'HTML修仙记19', '渣渣辉19', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('29', '../img/l29.jpg', '118.10', '2.90', '1018.00', 'HTML修仙记20', '渣渣辉20', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('30', '../img/l30.jpg', '119.10', '3.90', '1019.00', 'HTML修仙记21', '渣渣辉21', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('31', '../img/l31.jpg', '120.10', '4.90', '1020.00', 'HTML修仙记22', '渣渣辉22', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('32', '../img/l32.jpg', '121.10', '1.90', '1021.00', 'HTML修仙记23', '渣渣辉23', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('33', '../img/l33.jpg', '122.10', '6.90', '1022.00', 'HTML修仙记24', '渣渣辉24', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('34', '../img/l34.jpg', '123.10', '1.90', '1023.00', 'HTML修仙记25', '渣渣辉25', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('35', '../img/l35.jpg', '124.10', '1.90', '1024.00', 'HTML修仙记26', '渣渣辉26', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('36', '../img/l36.jpg', '125.10', '1.90', '1025.00', 'HTML修仙记27', '渣渣辉27', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('37', '../img/l37.jpg', '126.10', '2.90', '1026.00', 'HTML修仙记28', '渣渣辉28', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('38', '../img/l38.jpg', '127.10', '2.90', '1027.00', 'HTML修仙记29', '渣渣辉29', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('39', '../img/l39.jpg', '128.10', '2.90', '1028.00', 'HTML修仙记30', '渣渣辉30', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('40', '../img/l40.jpg', '129.10', '3.90', '1029.00', 'HTML修仙记31', '渣渣辉31', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('41', '../img/l41.jpg', '130.10', '2.90', '1030.00', 'HTML修仙记32', '渣渣辉32', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('42', '../img/l42.jpg', '131.10', '5.90', '1031.00', 'HTML修仙记33', '渣渣辉33', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('43', '../img/l43.jpg', '132.10', '6.90', '1032.00', 'HTML修仙记34', '渣渣辉34', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('44', '../img/l44.jpg', '133.10', '7.90', '1033.00', 'HTML修仙记35', '渣渣辉35', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('45', '../img/l45.jpg', '134.10', '2.90', '1034.00', 'HTML修仙记36', '渣渣辉36', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('46', '../img/l46.jpg', '135.10', '2.90', '1035.00', 'HTML修仙记37', '渣渣辉37', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('47', '../img/l47.jpg', '136.10', '3.90', '1036.00', 'HTML修仙记38', '渣渣辉38', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('48', '../img/l48.jpg', '137.10', '3.90', '1037.00', 'HTML修仙记39', '渣渣辉39', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('49', '../img/l49.jpg', '138.10', '2.90', '1038.00', 'HTML修仙记40', '渣渣辉40', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('50', '../img/l50.jpg', '139.10', '3.90', '1039.00', 'HTML修仙记41', '渣渣辉41', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('51', '../img/l51.jpg', '140.10', '3.90', '1040.00', 'HTML修仙记42', '渣渣辉42', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('52', '../img/l52.jpg', '141.10', '5.90', '1041.00', 'HTML修仙记43', '渣渣辉43', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('53', '../img/l30.jpg', '142.10', '1.30', '1042.00', 'HTML修仙记44', '渣渣辉44', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('54', '../img/l31.jpg', '143.10', '2.30', '1043.00', 'HTML修仙记45', '渣渣辉45', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('55', '../img/l32.jpg', '144.10', '3.30', '1044.00', 'HTML修仙记46', '渣渣辉46', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('56', '../img/l33.jpg', '145.10', '4.30', '1045.00', 'HTML修仙记47', '渣渣辉47', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('57', '../img/l34.jpg', '146.10', '5.30', '1046.00', 'HTML修仙记48', '渣渣辉48', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('58', '../img/l35.jpg', '147.10', '0.50', '1047.00', 'HTML修仙记49', '渣渣辉49', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('59', '../img/l36.jpg', '148.10', '1.50', '1048.00', 'HTML修仙记50', '渣渣辉50', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('60', '../img/l37.jpg', '149.10', '2.50', '1049.00', 'HTML修仙记51', '渣渣辉51', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('61', '../img/l38.jpg', '150.10', '3.50', '1050.00', 'HTML修仙记52', '渣渣辉52', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('62', '../img/l39.jpg', '151.10', '4.50', '1051.00', 'HTML修仙记53', '渣渣辉53', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('63', '../img/l40.jpg', '152.10', '5.50', '1052.00', 'HTML修仙记54', '渣渣辉54', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('64', '../img/l41.jpg', '153.10', '6.50', '1053.00', 'HTML修仙记55', '渣渣辉55', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('65', '../img/l42.jpg', '154.10', '7.50', '1054.00', 'HTML修仙记56', '渣渣辉56', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('66', '../img/l43.jpg', '155.10', '1.40', '1055.00', 'HTML修仙记57', '渣渣辉57', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('67', '../img/l44.jpg', '156.10', '1.60', '1056.00', 'HTML修仙记58', '渣渣辉58', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('68', '../img/l45.jpg', '157.10', '1.80', '1057.00', 'HTML修仙记59', '渣渣辉59', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('69', '../img/l46.jpg', '158.10', '2.00', '1058.00', 'HTML修仙记60', '渣渣辉60', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('70', '../img/l47.jpg', '159.10', '2.20', '1059.00', 'HTML修仙记61', '渣渣辉61', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('71', '../img/l48.jpg', '160.10', '2.40', '1060.00', 'HTML修仙记62', '渣渣辉62', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('72', '../img/l49.jpg', '161.10', '2.60', '1061.00', 'HTML修仙记63', '渣渣辉63', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('73', '../img/l50.jpg', '162.10', '2.80', '1062.00', 'HTML修仙记64', '渣渣辉64', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('74', '../img/l51.jpg', '163.10', '3.00', '1063.00', 'HTML修仙记65', '渣渣辉65', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('75', '../img/l52.jpg', '164.10', '3.20', '1064.00', 'HTML修仙记66', '渣渣辉66', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('76', '../img/l1.jpg', '165.10', '3.40', '1065.00', 'HTML修仙记67', '渣渣辉67', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('77', '../img/l2.jpg', '166.10', '3.60', '1066.00', 'HTML修仙记68', '渣渣辉68', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('78', '../img/l3.jpg', '167.10', '3.80', '1067.00', 'HTML修仙记69', '渣渣辉69', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('79', '../img/l4.jpg', '168.10', '4.00', '1068.00', 'HTML修仙记70', '渣渣辉70', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('80', '../img/l5.jpg', '169.10', '4.20', '1069.00', 'HTML修仙记71', '渣渣辉71', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('81', '../img/l6.jpg', '170.10', '4.40', '1070.00', 'HTML修仙记72', '渣渣辉72', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('82', '../img/l7.jpg', '171.10', '4.60', '1071.00', 'HTML修仙记73', '渣渣辉73', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('83', '../img/l8.jpg', '172.10', '4.80', '1072.00', 'HTML修仙记74', '渣渣辉74', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('84', '../img/l9.jpg', '173.10', '5.00', '1073.00', 'HTML修仙记75', '渣渣辉75', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('85', '../img/l10.jpg', '174.10', '5.20', '1074.00', 'HTML修仙记76', '渣渣辉76', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('86', '../img/l11.jpg', '175.10', '2.60', '1075.00', 'HTML修仙记77', '渣渣辉77', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('87', '../img/l12.jpg', '176.10', '3.00', '1076.00', 'HTML修仙记78', '渣渣辉78', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('88', '../img/l13.jpg', '177.10', '1.20', '1077.00', 'HTML修仙记79', '渣渣辉79', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('89', '../img/l14.jpg', '178.10', '1.20', '1078.00', 'HTML修仙记80', '渣渣辉80', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('90', '../img/l15.jpg', '179.10', '1.40', '1079.00', 'HTML修仙记81', '渣渣辉81', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('91', '../img/l16.jpg', '180.10', '1.60', '1080.00', 'HTML修仙记82', '渣渣辉82', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('92', '../img/l17.jpg', '181.10', '1.80', '1081.00', 'HTML修仙记83', '渣渣辉83', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('93', '../img/l18.jpg', '182.10', '2.00', '1082.00', 'HTML修仙记84', '渣渣辉84', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('94', '../img/l19.jpg', '183.10', '2.20', '1083.00', 'HTML修仙记85', '渣渣辉85', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('95', '../img/l20.jpg', '184.10', '2.40', '1084.00', 'HTML修仙记86', '渣渣辉86', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('96', '../img/l21.jpg', '185.10', '2.60', '1085.00', 'HTML修仙记87', '渣渣辉87', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('97', '../img/l22.jpg', '186.10', '2.80', '1086.00', 'HTML修仙记88', '渣渣辉88', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('98', '../img/l23.jpg', '187.10', '3.00', '1087.00', 'HTML修仙记89', '渣渣辉89', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('99', '../img/l24.jpg', '188.10', '3.20', '1088.00', 'HTML修仙记90', '渣渣辉90', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('100', '../img/l25.jpg', '189.10', '3.40', '1089.00', 'HTML修仙记91', '渣渣辉91', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('101', '../img/l26.jpg', '190.10', '3.60', '1090.00', 'HTML修仙记92', '渣渣辉92', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('102', '../img/l27.jpg', '191.10', '3.80', '1091.00', 'HTML修仙记93', '渣渣辉93', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('103', '../img/l28.jpg', '192.10', '4.00', '1092.00', 'HTML修仙记94', '渣渣辉94', '贪玩蓝月出版社');
INSERT INTO `listgood` VALUES ('104', '../img/l29.jpg', '193.10', '4.20', '1093.00', 'HTML修仙记95', '渣渣辉95', '贪玩蓝月出版社');
SET FOREIGN_KEY_CHECKS=1;
