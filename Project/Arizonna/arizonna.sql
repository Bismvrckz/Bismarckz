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
  `username` varchar(255) NOT NULL,
  `user_avatar` varchar(255) NOT NULL,
  `commentPhrase` varchar(300) NOT NULL DEFAULT '',
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
INSERT INTO `comments` VALUES ('Bismarckz-1658833402897-comment-1658833324121-1658833425485',1658833324121,'Bismarckz-1658833402897','Bismarckz','http://localhost:2000/userAvatar/defaultAvatar.png','comment ngab','2022-07-26 11:03:45','2022-07-26 11:03:45'),('Bismarckz-1658833752049-comment-1658802083590-1658834405567',1658802083590,'Bismarckz-1658833752049','V','http://localhost:2000/userAvatar/V-avatar.png','wah selamat yaa :D','2022-07-26 11:20:05','2022-07-26 11:20:05'),('Bismarckz-1658833752049-comment-1658802083590-1658837510760',1658802083590,'Bismarckz-1658833752049','V','http://localhost:2000/userAvatar/V-avatar.png','gas','2022-07-26 12:11:50','2022-07-26 12:11:50'),('Bismarckz-1658833752049-comment-1658833324121-1658837154279',1658833324121,'Bismarckz-1658833752049','Bismarckz','http://localhost:2000/userAvatar/Bismarckz-avatar.png','thx ngab','2022-07-26 12:05:54','2022-07-26 12:05:54'),('Bismarckz-1658833752049-comment-1658833324121-1658837472965',1658833324121,'Bismarckz-1658833752049','Bismarckz','http://localhost:2000/userAvatar/Bismarckz-avatar.png','mabar skuy','2022-07-26 12:11:12','2022-07-26 12:11:12'),('V-1658802149162-comment-1658802083590-1658802207954',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','first','2022-07-26 02:23:27','2022-07-26 02:23:27'),('V-1658802149162-comment-1658802083590-1658815710005',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','second','2022-07-26 06:08:30','2022-07-26 06:08:30'),('V-1658802149162-comment-1658802083590-1658815751998',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','paan si cok? pake first second segala','2022-07-26 06:09:11','2022-07-26 06:09:11'),('V-1658802149162-comment-1658802083590-1658815765223',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','duh!.....','2022-07-26 06:09:25','2022-07-26 06:09:25'),('V-1658802149162-comment-1658802083590-1658815816597',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','iyain dah','2022-07-26 06:10:16','2022-07-26 06:10:16'),('V-1658802149162-comment-1658802083590-1658815832475',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','diemin aja ege...','2022-07-26 06:10:32','2022-07-26 06:10:32'),('V-1658802149162-comment-1658802083590-1658816457660',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','brisik lu pada','2022-07-26 06:20:57','2022-07-26 06:20:57'),('V-1658802149162-comment-1658802083590-1658819147872',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','nyenyneynyeneynynenye','2022-07-26 07:05:47','2022-07-26 07:05:47'),('V-1658802149162-comment-1658802083590-1658819323323',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','si paling','2022-07-26 07:08:43','2022-07-26 07:08:43'),('V-1658802149162-comment-1658802083590-1658821134876',1658802083590,'V-1658802149162','V','http://localhost:2000/userAvatar/V-avatar.png','kripik pisang nya kaka, yg mau wa aku yaaa','2022-07-26 07:38:54','2022-07-26 07:38:54'),('V-1658802149162-comment-1658833324121-1658833811536',1658833324121,'V-1658802149162','Bismarckz','http://localhost:2000/userAvatar/Bismarckz-avatar.png','stress lu pada','2022-07-26 11:10:11','2022-07-26 11:10:11'),('V-1658819061947-comment-1658802083590-1658819072266',1658802083590,'V-1658819061947','V','http://localhost:2000/userAvatar/V-avatar.png','meng sad','2022-07-26 07:04:32','2022-07-26 07:04:32'),('V-1658819061947-comment-1658802083590-1658819728902',1658802083590,'V-1658819061947','V','http://localhost:2000/userAvatar/V-avatar.png','yg sabar broo','2022-07-26 07:15:28','2022-07-26 07:15:28'),('V-1658819061947-comment-1658833324121-1658833785241',1658833324121,'V-1658819061947','Bismarckz','http://localhost:2000/userAvatar/Bismarckz-avatar.png','solid solid solid','2022-07-26 11:09:45','2022-07-26 11:09:45');
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
INSERT INTO `posts` VALUES ('Bismarckz-1658833402897',1658833324121,'magpul','http://localhost:2000/userPosts/Bismarckz-post-0.png','2022-07-26 11:03:22','2022-07-26 11:03:22'),('Bismarckz-1658833752049',1658833324121,'success!','http://localhost:2000/userPosts/Bismarckz-post-1.png','2022-07-26 11:09:12','2022-07-26 11:09:12'),('V-1658802149162',1658802083590,'nice','http://localhost:2000/userPosts/V-post-0.png','2022-07-26 02:22:29','2022-07-26 02:22:29'),('V-1658819061947',1658802083590,'sedih','http://localhost:2000/userPosts/V-post-1.png','2022-07-26 07:04:21','2022-07-26 07:04:21'),('V-1658821493530',1658802083590,'halal chad','http://localhost:2000/userPosts/V-post-2.png','2022-07-26 07:44:53','2022-07-26 07:44:53');
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
) ENGINE=InnoDB AUTO_INCREMENT=1658833324122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1658802083590,'V','V@mail.com','ENGGA suka bakso','V cyberpunk','http://localhost:2000/userAvatar/V-avatar.png','$2a$10$ZlJEbvj2BquGPB0RywNtiuAM00gGcY9ibXSiBjhqdA8O/SA.LOAJG',1,'2022-07-26 02:21:23','2022-07-26 07:51:23'),(1658832505691,'bsdbadbsa','Njub@mail.com','','','http://localhost:2000/userAvatar/defaultAvatar.png','$2a$10$LRDRyM4HXxXMEA8AH2c9nerBQy6SennDN3xWRum1FtrSZlI9rp23y',1,'2022-07-26 10:48:25','2022-07-26 18:02:53'),(1658833324121,'Bismarckz','Reich@mail.com','wibu','eva shogoki','http://localhost:2000/userAvatar/Bismarckz-avatar.png','$2a$10$TZx/1tlmFeZ3jm5KJd1sau.CQLdlmx/QN.zv905lNr9PunQgzr7Ia',1,'2022-07-26 11:02:04','2022-07-26 11:07:36');
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

-- Dump completed on 2022-07-27  6:41:45
