/*
 Navicat Premium Data Transfer

 Source Server         : 123
 Source Server Type    : MySQL
 Source Server Version : 50736 (5.7.36)
 Source Host           : 110.40.205.204:3306
 Source Schema         : water_flower

 Target Server Type    : MySQL
 Target Server Version : 50736 (5.7.36)
 File Encoding         : 65001

 Date: 17/03/2023 16:47:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for plant
-- ----------------------------
DROP TABLE IF EXISTS `plant`;
CREATE TABLE `plant` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'plant_id',
  `user_id` int(10) NOT NULL COMMENT 'belong to which user',
  `image_url` varchar(250) DEFAULT NULL COMMENT 'plant image url',
  `plant_name` varchar(250) DEFAULT NULL COMMENT 'plant name',
  `threshold` int(10) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'update time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of plant
-- ----------------------------
BEGIN;
INSERT INTO `plant` (`id`, `user_id`, `image_url`, `plant_name`, `threshold`, `create_time`, `update_time`) VALUES (32, 3, 'https://plant.id/media/images/11a210dd8fe54fff962cc89bbb5495ac.jpg', 'Phalaenopsis', 70, '2023-03-17 23:34:18', '2023-03-17 23:35:12');
COMMIT;

-- ----------------------------
-- Table structure for sensor
-- ----------------------------
DROP TABLE IF EXISTS `sensor`;
CREATE TABLE `sensor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'sensor_database_id',
  `plant_id` int(10) NOT NULL COMMENT 'belong to which plant',
  `sensor_id` varchar(250) NOT NULL COMMENT 'belong to which plant',
  `current_humidity` varchar(250) DEFAULT NULL COMMENT 'current humidity of the plant',
  `last_water_time` datetime DEFAULT NULL COMMENT 'the last water time of the plant',
  `status` int(10) DEFAULT NULL COMMENT '0 menas off 1means on',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'update time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `sensor_id` (`sensor_id`) USING BTREE,
  UNIQUE KEY `plant_id` (`plant_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of sensor
-- ----------------------------
BEGIN;
INSERT INTO `sensor` (`id`, `plant_id`, `sensor_id`, `current_humidity`, `last_water_time`, `status`, `create_time`, `update_time`) VALUES (32, 32, 'c049efe5fa20', '100', '2023-03-18 07:40:54', 0, '2023-03-17 23:34:18', '2023-03-17 23:40:54');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'user_id',
  `user_name` varchar(20) NOT NULL COMMENT 'user_name',
  `password` char(100) NOT NULL COMMENT 'password',
  `email` varchar(50) NOT NULL COMMENT 'email',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'update time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_name` (`user_name`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `user_name`, `password`, `email`, `create_time`, `update_time`) VALUES (1, 'yongkangchen', '$2a$10$B/KURnZqp2wJUIeAuym7EOI/2ayNLfDV61dpYY1LGSfnvA8YJXfO2', 'lx1988cyk@gmail.com', '2023-03-13 00:47:02', '2023-03-13 00:47:02');
INSERT INTO `user` (`id`, `user_name`, `password`, `email`, `create_time`, `update_time`) VALUES (2, 'John', '$2a$10$USLPZp49rWhUhgMwnuqbkeBy8So7T8szP1kriE1B8MkhbmBmLh2Oe', 'yanxuwu97@gmail.com', '2023-03-13 05:42:00', '2023-03-13 05:42:00');
INSERT INTO `user` (`id`, `user_name`, `password`, `email`, `create_time`, `update_time`) VALUES (3, 'Yunchen', '$2a$10$aqSUJ6MJ0DXOMr5yaaDJbeNYMOlLKL1Bmpli/d9hA1OlLJfSIf7Su', 'yzhang39@scu.edu', '2023-03-13 18:39:54', '2023-03-13 18:39:54');
INSERT INTO `user` (`id`, `user_name`, `password`, `email`, `create_time`, `update_time`) VALUES (4, 'Arunkumar', '$2a$10$WHZbi3nE6RLqbGE7TmHXgexFi7ihGZY/GKQwHlReW3hmqx5Qg5Zrq', 'arnkumar2403@gmail.com', '2023-03-15 03:02:49', '2023-03-15 03:02:49');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
