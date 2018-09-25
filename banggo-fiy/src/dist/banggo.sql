/*
Navicat MySQL Data Transfer

Source Server         : jetyamm
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : banggo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-20 16:43:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `goodId` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `production` varchar(255) DEFAULT NULL,
  `originPrice` float DEFAULT NULL,
  `currentPrice` float DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `imgIntroduction` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('G0001', 'img/goodsList/245451_00.jpg', 'METERSBONWE', '【秋季新品】男简洁连帽水洗夹', '239', '123.3', '2.3�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_91_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0002', 'img/goodsList/602082_00.jpg', 'METERSBONWE', '【秋季新品�?', '239', '185.9', '2.2�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_91_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0003', 'img/goodsList/661132_00.jpg', 'METERSBONWE', '男简洁连帽水洗夹', '239', '111', '1.3�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\",\"img/goodsList/734003_91_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0004', 'img/goodsList/661196_00.jpg', 'METERSBONWE', '【秋季新品】连帽水洗夹', '239', '118.9', '5.7�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0005', 'img/goodsList/A03838_00.jpg', 'METERSBONWE', '【秋季帽水洗�?', '239', '28.9', '1�?', '[\"img/goodsList/734003_30_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0006', 'img/goodsList/245451_00.jpg', 'METERSBONWE', '【秋季新品】男简洁连�?', '239', '357.9', '0.8�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_91_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0007', 'img/goodsList/602082_00.jpg', 'METERSBONWE', '水洗�?', '239', '337', '8�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\",\"img/goodsList/734003_91_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0008', 'img/goodsList/661132_00.jpg', 'METERSBONWE', '简洁连帽水洗夹', '239', '59.9', '8.8�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_91_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0009', 'img/goodsList/661196_00.jpg', 'METERSBONWE', '【连帽水洗夹', '239', '199.9', '1.5�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_91_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0010', 'img/goodsList/A03838_00.jpg', 'METERSBONWE', '【秋季新品】男简洁连帽水洗夹', '239', '238.9', '2.3�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\"]');
INSERT INTO `goodslist` VALUES ('G0011', 'img/goodsList/A03838_00.jpg', 'METERSBONWE', '秋季新品', '239', '238.9', '2.3�?', '[\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\",\"img/goodsList/734003_91_00.jpg\",\"img/goodsList/734003_30_00.jpg\",\"img/goodsList/734003_90_00.jpg\",\"img/goodsList/734003_91_00.jpg\"]');

-- ----------------------------
-- Table structure for shoppingcar
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcar`;
CREATE TABLE `shoppingcar` (
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` float(255,2) NOT NULL,
  `qty` int(255) NOT NULL,
  `size` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `goodId` varchar(255) NOT NULL,
  PRIMARY KEY (`goodId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcar
-- ----------------------------
INSERT INTO `shoppingcar` VALUES ('img/goodsList/661196_00.jpg', 'METERSBONWE【秋季新品】男简洁连帽水洗夹', '199.90', '1', '', '', 'G0009');
INSERT INTO `shoppingcar` VALUES ('img/goodsList/602082_00.jpg', 'METERSBONWE【秋季新品�?', '185.90', '1', '', '', 'G0002');
INSERT INTO `shoppingcar` VALUES ('img/goodsList/A03838_00.jpg', 'METERSBONWE【秋季新品】男简洁连帽水洗夹', '238.90', '1', '', '', 'G0010');

-- ----------------------------
-- Table structure for showhistory
-- ----------------------------
DROP TABLE IF EXISTS `showhistory`;
CREATE TABLE `showhistory` (
  `goodId` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `currentPrice` float(255,2) DEFAULT NULL,
  `originPrice` float(255,2) DEFAULT NULL,
  PRIMARY KEY (`goodId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of showhistory
-- ----------------------------
INSERT INTO `showhistory` VALUES ('G0004', 'img/goodsList/661196_00.jpg', '【秋季新品】连帽水洗夹', '118.90', '239.00');
INSERT INTO `showhistory` VALUES ('G0002', 'img/goodsList/602082_00.jpg', '【秋季新品�?', '185.90', '239.00');
INSERT INTO `showhistory` VALUES ('G0010', 'img/goodsList/A03838_00.jpg', '【秋季新品】男简洁连帽水洗夹', '238.90', '239.00');

-- ----------------------------
-- Table structure for user_register
-- ----------------------------
DROP TABLE IF EXISTS `user_register`;
CREATE TABLE `user_register` (
  `username` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `invitPhone` varchar(255) NOT NULL,
  PRIMARY KEY (`phone`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_register
-- ----------------------------
INSERT INTO `user_register` VALUES ('binge', '13548765483', '123456', '');
INSERT INTO `user_register` VALUES ('afdasf', '13548154654', '123456', '');
INSERT INTO `user_register` VALUES ('', '', '', '');
INSERT INTO `user_register` VALUES ('weige', '13454848145', '123456', '');
INSERT INTO `user_register` VALUES ('weige1', '13454875245', '123456', '');
SET FOREIGN_KEY_CHECKS=1;
