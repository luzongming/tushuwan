/*
Navicat MySQL Data Transfer

Source Server         : 1809
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bookschina

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-01 18:41:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for orderadd
-- ----------------------------
DROP TABLE IF EXISTS `orderadd`;
CREATE TABLE `orderadd` (
  `id` int(6) unsigned NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `pirce` decimal(10,2) DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT NULL,
  `book` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderadd
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
