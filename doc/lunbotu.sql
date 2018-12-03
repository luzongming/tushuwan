/*
Navicat MySQL Data Transfer

Source Server         : 1809
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bookschina

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-01 18:41:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for lunbotu
-- ----------------------------
DROP TABLE IF EXISTS `lunbotu`;
CREATE TABLE `lunbotu` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pirce` varchar(255) DEFAULT NULL,
  `original` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lunbotu
-- ----------------------------
INSERT INTO `lunbotu` VALUES ('1', 'img/s11.jpg', '垮掉/金斯堡生命终结陪伴者撰述所有垮掉派作家交往史', '13.4', '32');
INSERT INTO `lunbotu` VALUES ('2', 'img/s12.jpg', '文化不会老-名家对谈录/王世襄吴冠中等名家聊手艺', '11', '29');
INSERT INTO `lunbotu` VALUES ('3', 'img/s13.jpg', '给孩子最美的教育-麦加菲美德读本/五代美国人精神食粮', '16.8', '39.9');
INSERT INTO `lunbotu` VALUES ('4', 'img/s14.jpg', '民国就是这么当官/妙解政坛大佬宦海浮沉制造混乱', '18.9', '49.8');
INSERT INTO `lunbotu` VALUES ('5', 'img/s21.jpg', '张爱玲的意象世界-鹅毛信文库/巨细无遗的解析意象专著', '7.3', '20.8');
INSERT INTO `lunbotu` VALUES ('6', 'img/s22.jpg', '世俗的肉身-劳伦斯的绘画世界/文坛被禁散落的画中突围', '16', '38');
INSERT INTO `lunbotu` VALUES ('7', 'img/s23.jpg', '启功谈艺录-张志和学书笔记/十三年北师大小红楼学艺', '21.8', '68');
INSERT INTO `lunbotu` VALUES ('8', 'img/s24.jpg', '天才是怎样炼成的/日本教育部推荐读物抵制轻松教育', '11.2', '23');
INSERT INTO `lunbotu` VALUES ('9', 'img/s31.jpg', '奥斯曼帝国六百年:土耳其帝国的兴衰/获汤因比盛赞', '107.5', '128');
INSERT INTO `lunbotu` VALUES ('10', 'img/s32.jpg', '俺爹俺娘:一代中国人的家庭记忆和乡村岁月/焦波珍藏版', '56.3', '88');
INSERT INTO `lunbotu` VALUES ('11', 'img/s33.jpg', '医院骑士团九百年/中世纪神秘军事组织存续至今', '66.4', '189.8');
INSERT INTO `lunbotu` VALUES ('12', 'img/s34.jpg', '舌尖上的战争:食物、战争、历史的奇妙联系', '53.9', '119.8');
INSERT INTO `lunbotu` VALUES ('13', 'img/s41.jpg', '雀巢语屑(修订本)', '16', '38');
INSERT INTO `lunbotu` VALUES ('14', 'img/s42.jpg', '两次暗杀之间', '13.9', '29');
INSERT INTO `lunbotu` VALUES ('15', 'img/s43.jpg', '云南古佚书钞:增订本', '2.7', '5.9');
INSERT INTO `lunbotu` VALUES ('16', 'img/s44.jpg', '张爱玲给我的信件', '12.7', '39.8');
SET FOREIGN_KEY_CHECKS=1;
