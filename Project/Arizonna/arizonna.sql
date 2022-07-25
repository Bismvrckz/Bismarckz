-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: arizonna
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` varchar(255) NOT NULL,
  `user_id` bigint NOT NULL,
  `post_id` varchar(255) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_avatar` varchar(255) NOT NULL,
  `commentPhrase` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES ('Bismvrckz-1658396710689-comment-1658382703336-1658729840666',1658382703336,'Bismvrckz-1658396710689','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','first','2022-07-25 06:17:20','2022-07-25 06:17:20'),('Bismvrckz-1658396710689-comment-1658382703336-1658729862228',1658382703336,'Bismvrckz-1658396710689','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','lah ini post-an lu sendiri anjir','2022-07-25 06:17:42','2022-07-25 06:17:42'),('Bismvrckz-1658396710689-comment-1658382703336-1658755844767',1658382703336,'Bismvrckz-1658396710689','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','hayyuk','2022-07-25 13:30:44','2022-07-25 13:30:44'),('Bismvrckz-1658396710689-comment-1658382703336-1658755940066',1658382703336,'Bismvrckz-1658396710689','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','gas','2022-07-25 13:32:20','2022-07-25 13:32:20'),('Bismvrckz-1658396710689-comment-1658751059462-1658754206680',1658751059462,'Bismvrckz-1658396710689','Bismvrckz333','http://localhost:2000/userAvatar/Bismvrckz333-avatar.png','second','2022-07-25 13:03:26','2022-07-25 13:03:26'),('Bismvrckz-1658396726042-comment-1658382703336-1658730994857',1658382703336,'Bismvrckz-1658396726042','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','selamat','2022-07-25 06:36:34','2022-07-25 06:36:34'),('Bismvrckz-1658396749263-comment-1658382703336-1658727722142',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','first','2022-07-25 05:42:02','2022-07-25 05:42:02'),('Bismvrckz-1658396749263-comment-1658382703336-1658728797893',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','new','2022-07-25 05:59:57','2022-07-25 05:59:57'),('Bismvrckz-1658396749263-comment-1658382703336-1658728868078',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','adu meme gan','2022-07-25 06:01:08','2022-07-25 06:01:08'),('Bismvrckz-1658396749263-comment-1658382703336-1658729044136',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','gas','2022-07-25 06:04:04','2022-07-25 06:04:04'),('Bismvrckz-1658396749263-comment-1658382703336-1658729076255',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','ayok siapa berani','2022-07-25 06:04:36','2022-07-25 06:04:36'),('Bismvrckz-1658396749263-comment-1658382703336-1658729085339',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','kebalik blog','2022-07-25 06:04:45','2022-07-25 06:04:45'),('Bismvrckz-1658396749263-comment-1658382703336-1658729181250',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','sda','2022-07-25 06:06:21','2022-07-25 06:06:21'),('Bismvrckz-1658396749263-comment-1658382703336-1658729191406',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','lah bocah ngapa','2022-07-25 06:06:31','2022-07-25 06:06:31'),('Bismvrckz-1658396749263-comment-1658382703336-1658729209039',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','skip, off','2022-07-25 06:06:49','2022-07-25 06:06:49'),('Bismvrckz-1658396749263-comment-1658382703336-1658729734826',1658382703336,'Bismvrckz-1658396749263','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','p','2022-07-25 06:15:34','2022-07-25 06:15:34'),('Bismvrckz-1658397302006-comment-1658382703336-1658739666626',1658382703336,'Bismvrckz-1658397302006','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','stay halal brader','2022-07-25 09:01:06','2022-07-25 09:01:06'),('Bismvrckz-1658398967154-comment-1658382703336-1658740471965',1658382703336,'Bismvrckz-1658398967154','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','hutan nya abis kebakar pack....','2022-07-25 09:14:31','2022-07-25 09:14:31'),('Bismvrckz333-1658754525529-comment-1658382703336-1658754599478',1658382703336,'Bismvrckz333-1658754525529','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','yes','2022-07-25 13:09:59','2022-07-25 13:09:59'),('Bismvrckz333-1658754525529-comment-1658382703336-1658754719658',1658382703336,'Bismvrckz333-1658754525529','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','wauw','2022-07-25 13:11:59','2022-07-25 13:11:59'),('Bismvrckz333-1658754525529-comment-1658751059462-1658754542840',1658751059462,'Bismvrckz333-1658754525529','Bismvrckz333','http://localhost:2000/userAvatar/Bismvrckz333-avatar.png','wah bagus','2022-07-25 13:09:02','2022-07-25 13:09:02'),('Bismvrckz333-1658754561118-comment-1658382703336-1658754689813',1658382703336,'Bismvrckz333-1658754561118','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','wow','2022-07-25 13:11:29','2022-07-25 13:11:29');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `like_id` varchar(255) NOT NULL,
  `user_id` bigint NOT NULL,
  `post_id` varchar(255) NOT NULL,
  `liked` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`like_id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES ('Bismvrckz-1658396710689-1658382703336',1658382703336,'Bismvrckz-1658396710689',1,'2022-07-23 06:22:20','2022-07-23 06:22:20'),('Bismvrckz-1658396726042-1658382703336',1658382703336,'Bismvrckz-1658396726042',1,'2022-07-23 06:59:20','2022-07-23 06:59:20'),('Bismvrckz-1658396749263-1658382703336',1658382703336,'Bismvrckz-1658396749263',1,'2022-07-23 06:22:46','2022-07-23 06:22:46'),('Bismvrckz-1658396811711-1658382703336',1658382703336,'Bismvrckz-1658396811711',1,'2022-07-23 07:00:17','2022-07-23 07:00:17');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_id` varchar(255) NOT NULL,
  `user_id` bigint NOT NULL,
  `caption` varchar(100) DEFAULT '',
  `postImage` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`post_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES ('Bismvrckz-1658396710689',1658382703336,'haiperbist','http://localhost:2000/userPosts/Bismvrckz-post-0.png','2022-07-21 09:45:10','2022-07-21 09:45:10'),('Bismvrckz-1658396726042',1658382703336,'succes','http://localhost:2000/userPosts/Bismvrckz-post-1.png','2022-07-21 09:45:26','2022-07-21 09:45:26'),('Bismvrckz-1658396749263',1658382703336,'yes','http://localhost:2000/userPosts/Bismvrckz-post-2.png','2022-07-21 09:45:49','2022-07-21 09:45:49'),('Bismvrckz-1658396811711',1658382703336,'jalan-jalan euy','http://localhost:2000/userPosts/Bismvrckz-post-3.png','2022-07-21 09:46:51','2022-07-21 09:46:51'),('Bismvrckz-1658397094309',1658382703336,'my schemes','http://localhost:2000/userPosts/Bismvrckz-post-4.png','2022-07-21 09:51:34','2022-07-21 09:51:34'),('Bismvrckz-1658397302006',1658382703336,'follow for more!!','http://localhost:2000/userPosts/Bismvrckz-post-5.png','2022-07-21 09:55:02','2022-07-21 09:55:02'),('Bismvrckz-1658397325775',1658382703336,'beauty!','http://localhost:2000/userPosts/Bismvrckz-post-6.png','2022-07-21 09:55:25','2022-07-21 09:55:25'),('Bismvrckz-1658397716046',1658382703336,'this is a great game :)','http://localhost:2000/userPosts/Bismvrckz-post-7.png','2022-07-21 10:01:56','2022-07-21 10:01:56'),('Bismvrckz-1658397737345',1658382703336,'Pablo!!!','http://localhost:2000/userPosts/Bismvrckz-post-8.png','2022-07-21 10:02:17','2022-07-21 10:02:17'),('Bismvrckz-1658398967154',1658382703336,'nice forest','http://localhost:2000/userPosts/Bismvrckz-post-9.png','2022-07-21 10:22:47','2022-07-21 10:22:47'),('Bismvrckz-1658399020315',1658382703336,'one day!!','http://localhost:2000/userPosts/Bismvrckz-post-10.png','2022-07-21 10:23:40','2022-07-21 10:23:40'),('Bismvrckz-1658399047835',1658382703336,'love it..','http://localhost:2000/userPosts/Bismvrckz-post-11.png','2022-07-21 10:24:07','2022-07-21 10:24:07'),('Bismvrckz333-1658754525529',1658751059462,'art','http://localhost:2000/userPosts/Bismvrckz333-post-0.png','2022-07-25 13:08:45','2022-07-25 13:08:45'),('Bismvrckz333-1658754561118',1658751059462,'bike','http://localhost:2000/userPosts/Bismvrckz333-post-1.png','2022-07-25 13:09:21','2022-07-25 13:09:21');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220714104111-create-users.js'),('20220716075716-create-post.js'),('20220716083530-create-comment.js'),('20220716083547-create-like.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `bio` varchar(255) NOT NULL,
  `fullname` varchar(255) DEFAULT '',
  `user_avatar` varchar(255) DEFAULT 'http://localhost:2000/userAvatar/defaultAvatar.png',
  `user_password` varchar(100) NOT NULL,
  `isVerified` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1658751059463 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1658382703336,'Bismvrckz','Bismvrckz@r3ich.com','Bio baru','Nama lengkap','http://localhost:2000/userAvatar/Bismvrckz-avatar.png','$2a$10$DT1l9NLOdqVX0b2wJe/OP.A13KmRrgUYbzjn01c5QmlHUXvazW0RK',1,'2022-07-21 05:51:43','2022-07-21 06:08:40'),(1658382750447,'07M@r200412430','password@bismvrckz.com','','','http://localhost:2000/userAvatar/defaultAvatar.png','$2a$10$wmpaW21gVT7binyeP7fkYev8bvm7Y9Zh2EGBniEBso0vzHBA7YDBK',0,'2022-07-21 05:52:30','2022-07-21 05:52:30'),(1658751059462,'Bismvrckz333','leeasaleem27@gmail.com','Great warrior','Bismvrckz','http://localhost:2000/userAvatar/Bismvrckz333-avatar.png','$2a$10$F.FZ4rATDmAaD/6L58rDfuw6i/FgREgL1zDlw/C9cHDQjTGyGtBXi',1,'2022-07-25 12:10:59','2022-07-25 12:13:16');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-25 22:41:26
