-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: latininstruments
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (20,'Cort'),(19,'Dean'),(8,'Epiphone'),(14,'ESP'),(1,'Fender'),(2,'Gibson'),(17,'Godin'),(12,'Gretsch'),(7,'Ibanez'),(13,'Jackson'),(5,'Korg'),(9,'Martin'),(10,'PRS'),(15,'Rickenbacker'),(4,'Roland'),(18,'Schecter'),(16,'Seagull'),(11,'Squier'),(6,'Taylor'),(3,'Yamaha');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_instruments`
--

DROP TABLE IF EXISTS `categories_instruments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_instruments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_instruments`
--

LOCK TABLES `categories_instruments` WRITE;
/*!40000 ALTER TABLE `categories_instruments` DISABLE KEYS */;
INSERT INTO `categories_instruments` VALUES (15,'Accordions'),(14,'Banjos'),(4,'Bass Guitars'),(10,'Cellos'),(12,'Clarinets'),(3,'Drums'),(7,'Flutes'),(1,'Guitars'),(13,'Harps'),(2,'Keyboards'),(8,'Saxophones'),(5,'Synthesizers'),(11,'Trombones'),(9,'Trumpets'),(16,'Ukuleles'),(6,'Violins');
/*!40000 ALTER TABLE `categories_instruments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_vinyls`
--

DROP TABLE IF EXISTS `categories_vinyls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_vinyls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_vinyls`
--

LOCK TABLES `categories_vinyls` WRITE;
/*!40000 ALTER TABLE `categories_vinyls` DISABLE KEYS */;
INSERT INTO `categories_vinyls` VALUES (16,'Alternative'),(5,'Blues'),(6,'Country'),(7,'Electronic'),(15,'Folk'),(10,'Funk'),(3,'Hip Hop'),(13,'Indie'),(4,'Jazz'),(9,'Metal'),(2,'Pop'),(12,'Punk'),(11,'R&B'),(8,'Reggae'),(1,'Rock'),(18,'Ska'),(14,'Soul'),(17,'Techno');
/*!40000 ALTER TABLE `categories_vinyls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category_instrument`
--

DROP TABLE IF EXISTS `product_category_instrument`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category_instrument` (
  `product_id` int(11) NOT NULL,
  `category_instrument_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`,`category_instrument_id`),
  KEY `category_instrument_id` (`category_instrument_id`),
  CONSTRAINT `product_category_instrument_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_category_instrument_ibfk_2` FOREIGN KEY (`category_instrument_id`) REFERENCES `categories_instruments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category_instrument`
--

LOCK TABLES `product_category_instrument` WRITE;
/*!40000 ALTER TABLE `product_category_instrument` DISABLE KEYS */;
INSERT INTO `product_category_instrument` VALUES (1,1),(2,1),(3,2),(4,3),(5,5),(6,6),(7,8),(8,3),(9,4),(10,1),(11,12),(12,6),(13,4),(14,1),(15,5),(16,8),(17,3),(18,1),(19,9),(20,2);
/*!40000 ALTER TABLE `product_category_instrument` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category_vinyl`
--

DROP TABLE IF EXISTS `product_category_vinyl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category_vinyl` (
  `product_id` int(11) NOT NULL,
  `category_vinyl_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`,`category_vinyl_id`),
  KEY `category_vinyl_id` (`category_vinyl_id`),
  CONSTRAINT `product_category_vinyl_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_category_vinyl_ibfk_2` FOREIGN KEY (`category_vinyl_id`) REFERENCES `categories_vinyls` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category_vinyl`
--

LOCK TABLES `product_category_vinyl` WRITE;
/*!40000 ALTER TABLE `product_category_vinyl` DISABLE KEYS */;
INSERT INTO `product_category_vinyl` VALUES (1,1),(2,2),(3,8),(4,7),(5,10),(6,3),(7,4),(8,5),(9,6),(10,2),(11,11),(12,12),(13,4),(14,13),(15,14),(16,8),(17,15),(18,16),(19,17),(20,18);
/*!40000 ALTER TABLE `product_category_vinyl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `category` enum('instrument','vinyl') NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_brand_id` (`brand_id`),
  CONSTRAINT `fk_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Stratocaster','Classic electric guitar','instrument',999.99,'stratocaster.jpg',1),(2,'Les Paul Standard','Iconic electric guitar','instrument',1999.99,'les_paul_standard.jpg',2),(3,'Upright Piano','Traditional acoustic piano','instrument',4999.99,'upright_piano.jpg',3),(4,'TD-17KVX Drum Kit','Professional electronic drum set','instrument',1499.99,'td17kvx.jpg',4),(5,'Minilogue XD','Polyphonic analog synthesizer','instrument',649.99,'minilogue_xd.jpg',5),(6,'SV-200 Violin','Handcrafted violin for professionals','instrument',899.99,'sv200.jpg',6),(7,'Alto Saxophone','High-quality alto saxophone','instrument',999.99,'alto_sax.jpg',7),(8,'TR-8S Drum Machine','Modern drum machine for live performance','instrument',699.99,'tr8s.jpg',8),(9,'Jazz Bass','Classic electric bass guitar','instrument',899.99,'jazz_bass.jpg',9),(10,'Grand Concert Acoustic Guitar','Premium acoustic guitar','instrument',2999.99,'grand_concert.jpg',10),(11,'Abbey Road','Iconic Beatles vinyl album','vinyl',29.99,'abbey_road.jpg',11),(12,'Thriller','Best-selling Michael Jackson vinyl album','vinyl',24.99,'thriller.jpg',12),(13,'Kind of Blue','Miles Davis jazz masterpiece on vinyl','vinyl',34.99,'kind_of_blue.jpg',13),(14,'Back in Black','Classic AC/DC vinyl album','vinyl',27.99,'back_in_black.jpg',14),(15,'Dark Side of the Moon','Pink Floyd timeless vinyl album','vinyl',32.99,'dark_side_of_the_moon.jpg',15),(16,'Rumours','Fleetwood Mac iconic vinyl album','vinyl',22.99,'rumours.jpg',16),(17,'A Night at the Opera','Queen legendary vinyl album','vinyl',30.99,'night_at_the_opera.jpg',17),(18,'Pet Sounds','The Beach Boys classic vinyl album','vinyl',25.99,'pet_sounds.jpg',18),(19,'Born to Run','Bruce Springsteen vinyl album','vinyl',28.99,'born_to_run.jpg',19),(20,'Nevermind','Nirvana influential vinyl album','vinyl',26.99,'nevermind.jpg',20);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart`
--

DROP TABLE IF EXISTS `shopping_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `shopping_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `shopping_cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart`
--

LOCK TABLES `shopping_cart` WRITE;
/*!40000 ALTER TABLE `shopping_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` enum('admin','customer') NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'customer','John Doe','john.doe@example.com','password','john_doe.jpg','Music enthusiast'),(2,'customer','Jane Smith','jane.smith@example.com','password','jane_smith.jpg','Vinyl collector'),(3,'customer','Michael Johnson','michael.johnson@example.com','password','michael_johnson.jpg','Guitar player'),(4,'customer','Emily Davis','emily.davis@example.com','password','emily_davis.jpg','Drummer'),(5,'customer','David Wilson','david.wilson@example.com','password','david_wilson.jpg','Piano teacher'),(6,'customer','Sarah Brown','sarah.brown@example.com','password','sarah_brown.jpg','Saxophonist'),(7,'customer','Chris Taylor','chris.taylor@example.com','password','chris_taylor.jpg','Music producer'),(8,'customer','Amanda Clark','amanda.clark@example.com','password','amanda_clark.jpg','Bass player'),(9,'customer','Kevin Martinez','kevin.martinez@example.com','password','kevin_martinez.jpg','Music lover'),(10,'customer','Laura Thompson','laura.thompson@example.com','password','laura_thompson.jpg','Vinyl enthusiast'),(11,'customer','Robert Rodriguez','robert.rodriguez@example.com','password','robert_rodriguez.jpg','Guitar collector'),(12,'customer','Karen White','karen.white@example.com','password','karen_white.jpg','Drum teacher'),(13,'customer','Steven Lee','steven.lee@example.com','password','steven_lee.jpg','Keyboardist'),(14,'customer','Melissa Harris','melissa.harris@example.com','password','melissa_harris.jpg','Violinist'),(15,'customer','Mark Thomas','mark.thomas@example.com','password','mark_thomas.jpg','Music student'),(16,'customer','Lisa Allen','lisa.allen@example.com','password','lisa_allen.jpg','Music blogger'),(17,'customer','Daniel Young','daniel.young@example.com','password','daniel_young.jpg','Vinyl addict'),(18,'customer','Jennifer Garcia','jennifer.garcia@example.com','password','jennifer_garcia.jpg','Guitarist'),(19,'customer','James Scott','james.scott@example.com','password','james_scott.jpg','Music teacher'),(20,'customer','Angela King','angela.king@example.com','password','angela_king.jpg','Singer-songwriter');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'latininstruments'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-02 16:51:07
