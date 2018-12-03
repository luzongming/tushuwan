/*
Navicat MySQL Data Transfer

Source Server         : 1809
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bookschina

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-01 18:42:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tabqihuan1
-- ----------------------------
DROP TABLE IF EXISTS `tabqihuan1`;
CREATE TABLE `tabqihuan1` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `book` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pirce` varchar(255) DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tabqihuan1
-- ----------------------------
INSERT INTO `tabqihuan1` VALUES ('1', 'img/tab11.jpg', '镇与城', '鲁迅', '20.8', '30.8');
INSERT INTO `tabqihuan1` VALUES ('2', 'img/tab12.jpg', '拥抱之书', '牛顿', '60.6', '70.8');
INSERT INTO `tabqihuan1` VALUES ('3', 'img/tab13.jpg', '理想与情感', '周杰伦', '30.5', '40.5');
INSERT INTO `tabqihuan1` VALUES ('4', 'img/tab14.jpg', '诺曼·梅勒', '成龙', '28.6', '38.6');
INSERT INTO `tabqihuan1` VALUES ('5', 'img/tab15.jpg', '猎手心是孤独的', '李小龙', '99.8', '100');
INSERT INTO `tabqihuan1` VALUES ('6', 'img/tab16.jpg', '人间失格', '陈奕迅', '80', '88.6');
INSERT INTO `tabqihuan1` VALUES ('7', 'img/tab17.jpg', '德语短篇小说经典', '薛之谦', '90', '100.8');
INSERT INTO `tabqihuan1` VALUES ('8', 'img/tab18.jpg', '风雨麦家', '爱因斯坦', '100', '100.8');
INSERT INTO `tabqihuan1` VALUES ('9', 'img/tab21.jpg', '催枪问', '乔布斯', '6.66', '7.66');
INSERT INTO `tabqihuan1` VALUES ('10', 'img/tab22.jpg', '剑侠情缘叁壹', '马云', '8.88', '10.88');
INSERT INTO `tabqihuan1` VALUES ('11', 'img/tab23.jpg', '催枪情缘叁壹', '马化腾', '7.77', '8.77');
INSERT INTO `tabqihuan1` VALUES ('12', 'img/tab24.jpg', '沉颜传奇1', '林俊杰1', '60', '61');
INSERT INTO `tabqihuan1` VALUES ('13', 'img/tab25.jpg', '沉颜传奇2', '林俊杰2', '61', '62');
INSERT INTO `tabqihuan1` VALUES ('14', 'img/tab26.jpg', '沉颜传奇3', '林俊杰3', '62', '63');
INSERT INTO `tabqihuan1` VALUES ('15', 'img/tab27.jpg', '沉颜传奇4', '林俊杰4', '63', '64');
INSERT INTO `tabqihuan1` VALUES ('16', 'img/tab28.jpg', '沉颜传奇5', '林俊杰5', '64', '65');
INSERT INTO `tabqihuan1` VALUES ('17', 'img/tab31.jpg', '沉颜传奇6', '林俊杰6', '65', '66');
INSERT INTO `tabqihuan1` VALUES ('18', 'img/tab32.jpg', '沉颜传奇7', '林俊杰7', '66', '67');
INSERT INTO `tabqihuan1` VALUES ('19', 'img/tab33.jpg', '沉颜传奇8', '林俊杰8', '67', '68');
INSERT INTO `tabqihuan1` VALUES ('20', 'img/tab34.jpg', '沉颜传奇9', '林俊杰9', '68', '69');
INSERT INTO `tabqihuan1` VALUES ('21', 'img/tab35.jpg', '沉颜传奇10', '林俊杰10', '69', '70');
INSERT INTO `tabqihuan1` VALUES ('22', 'img/tab36.jpg', '沉颜传奇11', '林俊杰11', '70', '71');
INSERT INTO `tabqihuan1` VALUES ('23', 'img/tab37.jpg', '沉颜传奇12', '林俊杰12', '71', '72');
INSERT INTO `tabqihuan1` VALUES ('24', 'img/tab38.jpg', '沉颜传奇13', '林俊杰13', '72', '73');
INSERT INTO `tabqihuan1` VALUES ('25', 'img/tab41.jpg', '沉颜传奇14', '林俊杰14', '73', '74');
INSERT INTO `tabqihuan1` VALUES ('26', 'img/tab42.jpg', '沉颜传奇15', '林俊杰15', '74', '75');
INSERT INTO `tabqihuan1` VALUES ('27', 'img/tab43.jpg', '沉颜传奇16', '林俊杰16', '75', '76');
INSERT INTO `tabqihuan1` VALUES ('28', 'img/tab44.jpg', '沉颜传奇17', '林俊杰17', '76', '77');
INSERT INTO `tabqihuan1` VALUES ('29', 'img/tab45.jpg', '沉颜传奇18', '林俊杰18', '77', '78');
INSERT INTO `tabqihuan1` VALUES ('30', 'img/tab46.jpg', '沉颜传奇19', '林俊杰19', '78', '79');
INSERT INTO `tabqihuan1` VALUES ('31', 'img/tab47.jpg', '沉颜传奇20', '林俊杰20', '79', '80');
INSERT INTO `tabqihuan1` VALUES ('32', 'img/tab48.jpg', '沉颜传奇21', '林俊杰21', '80', '81');
SET FOREIGN_KEY_CHECKS=1;
