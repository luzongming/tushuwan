/*
Navicat MySQL Data Transfer

Source Server         : 1809
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bookschina

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-01 18:41:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for chinabooks
-- ----------------------------
DROP TABLE IF EXISTS `chinabooks`;
CREATE TABLE `chinabooks` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `number` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chinabooks
-- ----------------------------
INSERT INTO `chinabooks` VALUES ('1', '13888888888', 'a11111', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('2', '13188888889', 'a11112', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('3', '13188888890', 'a11113', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('4', '13188888891', 'a11114', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('5', '13188888892', 'a11115', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('6', '13188888893', 'a11116', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('7', '13188888894', 'a11117', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('8', '13188888895', 'a11118', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('9', '13188888896', 'a11119', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('10', '13188888897', 'a11120', '2018-11-23 16:15:27');
INSERT INTO `chinabooks` VALUES ('11', '13199998888', 'q123456', '2018-11-23 22:10:49');
INSERT INTO `chinabooks` VALUES ('15', '13832321321', 'a12345', '2018-11-28 18:44:52');
INSERT INTO `chinabooks` VALUES ('14', '13213213213', 'A12345', '2018-11-23 22:15:17');
INSERT INTO `chinabooks` VALUES ('16', '13832321321', 'a12345', '2018-11-28 18:44:53');
INSERT INTO `chinabooks` VALUES ('17', '13832321321', 'a12345', '2018-11-28 18:44:59');
INSERT INTO `chinabooks` VALUES ('18', '13878321321', 'a12345', '2018-11-29 17:07:21');
INSERT INTO `chinabooks` VALUES ('19', '13803821321', 'a11111', '2018-11-30 18:26:30');
INSERT INTO `chinabooks` VALUES ('20', '13838213213', 'a11111', '2018-11-30 18:28:24');
INSERT INTO `chinabooks` VALUES ('22', '13666666666', 'a11111', '2018-12-01 18:08:09');
SET FOREIGN_KEY_CHECKS=1;
