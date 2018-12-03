/*
Navicat MySQL Data Transfer

Source Server         : 1809
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bookschina

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-01 18:42:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tabqiehuan2
-- ----------------------------
DROP TABLE IF EXISTS `tabqiehuan2`;
CREATE TABLE `tabqiehuan2` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `book` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pirce` varchar(255) DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tabqiehuan2
-- ----------------------------
INSERT INTO `tabqiehuan2` VALUES ('1', '钢铁练不成1', '鲁迅1', '18.6', '28.8', 'img/b11.jpg');
INSERT INTO `tabqiehuan2` VALUES ('2', '李白不写诗2', '李白2', '19.6', '29.8', 'img/b12.jpg');
INSERT INTO `tabqiehuan2` VALUES ('3', '如何删库走人1', '鲁迅2', '20.6', '30.8', 'img/b13.jpg');
INSERT INTO `tabqiehuan2` VALUES ('4', '论删数据库的重要性1', '李白3', '21.6', '31.8', 'img/b14.jpg');
INSERT INTO `tabqiehuan2` VALUES ('5', '奥特曼不打小怪兽', '鲁迅3', '22.6', '32.8', 'img/b15.jpg');
INSERT INTO `tabqiehuan2` VALUES ('6', 'HTML5的不归路1', '李白4', '23.6', '33.8', 'img/b16.jpg');
INSERT INTO `tabqiehuan2` VALUES ('7', 'HTML5的不归路2', '鲁迅4', '24.6', '34.8', 'img/b17.jpg');
INSERT INTO `tabqiehuan2` VALUES ('8', 'HTML5的不归路3', '李白5', '25.6', '35.8', 'img/b18.jpg');
INSERT INTO `tabqiehuan2` VALUES ('9', 'HTML5的不归路4', '鲁迅5', '26.6', '36.8', 'img/b21.jpg');
INSERT INTO `tabqiehuan2` VALUES ('10', 'HTML5的不归路5', '李白6', '27.6', '37.8', 'img/b22.jpg');
INSERT INTO `tabqiehuan2` VALUES ('11', 'HTML5的不归路6', '鲁迅6', '28.6', '38.8', 'img/b23.jpg');
INSERT INTO `tabqiehuan2` VALUES ('12', 'HTML5的不归路7', '李白7', '29.6', '39.8', 'img/b24.jpg');
INSERT INTO `tabqiehuan2` VALUES ('13', 'HTML5的不归路8', '鲁迅7', '30.6', '40.8', 'img/b25.jpg');
INSERT INTO `tabqiehuan2` VALUES ('14', 'HTML5的不归路9', '李白8', '31.6', '41.8', 'img/b26.jpg');
INSERT INTO `tabqiehuan2` VALUES ('15', 'HTML5的不归路10', '鲁迅8', '32.6', '42.8', 'img/b27.jpg');
INSERT INTO `tabqiehuan2` VALUES ('16', 'HTML5的不归路11', '李白9', '33.6', '43.8', 'img/b28.jpg');
INSERT INTO `tabqiehuan2` VALUES ('17', 'HTML5的不归路12', '鲁迅9', '34.6', '44.8', 'img/b29.jpg');
INSERT INTO `tabqiehuan2` VALUES ('18', 'HTML5的不归路13', '鲁迅2', '35.6', '45.8', 'img/b30.jpg');
INSERT INTO `tabqiehuan2` VALUES ('19', 'HTML5的不归路14', '李白3', '36.6', '46.8', 'img/b31.jpg');
INSERT INTO `tabqiehuan2` VALUES ('20', 'HTML5的不归路15', '鲁迅3', '37.6', '47.8', 'img/b32.jpg');
INSERT INTO `tabqiehuan2` VALUES ('21', 'HTML5的不归路16', '李白4', '38.6', '48.8', 'img/b33.jpg');
INSERT INTO `tabqiehuan2` VALUES ('22', 'HTML5的不归路17', '鲁迅4', '39.6', '49.8', 'img/b34.jpg');
INSERT INTO `tabqiehuan2` VALUES ('23', 'HTML5的不归路18', '李白5', '40.6', '50.8', 'img/b35.jpg');
INSERT INTO `tabqiehuan2` VALUES ('24', 'HTML5的不归路19', '鲁迅5', '41.6', '51.8', 'img/b36.jpg');
INSERT INTO `tabqiehuan2` VALUES ('25', 'HTML5的不归路20', '李白6', '42.6', '52.8', 'img/b37.jpg');
INSERT INTO `tabqiehuan2` VALUES ('26', 'HTML5的不归路21', '鲁迅6', '43.6', '53.8', 'img/b38.jpg');
INSERT INTO `tabqiehuan2` VALUES ('27', 'HTML5的不归路22', '李白7', '44.6', '54.8', 'img/b39.jpg');
INSERT INTO `tabqiehuan2` VALUES ('28', 'HTML5的不归路23', '鲁迅7', '45.6', '55.8', 'img/b40.jpg');
INSERT INTO `tabqiehuan2` VALUES ('29', 'HTML5的不归路24', '李白8', '46.6', '56.8', 'img/b41.jpg');
INSERT INTO `tabqiehuan2` VALUES ('30', 'HTML5的不归路25', '鲁迅8', '47.6', '57.8', 'img/b42.jpg');
INSERT INTO `tabqiehuan2` VALUES ('31', 'HTML5的不归路26', '李白9', '48.6', '58.8', 'img/b43.jpg');
INSERT INTO `tabqiehuan2` VALUES ('32', 'HTML5的不归路27', '鲁迅9', '49.6', '59.8', 'img/b44.jpg');
SET FOREIGN_KEY_CHECKS=1;
