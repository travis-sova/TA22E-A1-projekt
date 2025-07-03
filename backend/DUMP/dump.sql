-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: rott
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `cinema`
--

DROP TABLE IF EXISTS `cinema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinema` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinema`
--

LOCK TABLES `cinema` WRITE;
/*!40000 ALTER TABLE `cinema` DISABLE KEYS */;
INSERT INTO `cinema` VALUES (1,'Balti Jaama Cinema'),(2,'Õismäe ring Central Cinema'),(3,'Ülemiste Järve Underwater Cinema');
/*!40000 ALTER TABLE `cinema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `rating` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idmovies_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'https://image.tmdb.org/t/p/w500/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg','Moana 2','Animation','After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she\'s ever faced.',70),(2,'https://image.tmdb.org/t/p/w500/aosm8NMQ3UyoBVpSxyimorCQykC.jpg','Venom: The Last Dance','Science Fiction','Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie\'s last dance.',64),(3,'https://image.tmdb.org/t/p/w500/cNtAslrDhk1i3IOZ16vF7df6lMy.jpg','Absolution','Action','An aging ex-boxer gangster working as muscle for a Boston crime boss receives an upsetting diagnosis.  Despite a faltering memory, he attempts to rectify the sins of his past and reconnect with his estranged children. He is determined to leave a positive legacy for his grandson, but the criminal underworld isn’t done with him and won’t loosen their grip willingly.',60),(4,'https://image.tmdb.org/t/p/w500/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg','The Wild Robot','Animation','After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island\'s animals and cares for an orphaned baby goose.',84),(5,'https://image.tmdb.org/t/p/w500/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg','Smile 2','Horror','About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.',66),(6,'https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg','Gladiator II','Action','Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.',66),(7,'https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg','Wicked','Drama','When ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda, the two\'s unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.',76),(8,'https://image.tmdb.org/t/p/w500/bx92hl70NUhojjO3eV6LqKllj4L.jpg','GTMAX','Action','When a notorious gang of bikers recruits her brother for a heist, a former motocross champion must face her deepest fears to keep her family safe.',61),(9,'https://image.tmdb.org/t/p/w500/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg','Apocalypse Z: The Beginning of the End','Drama','When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.',68),(10,'https://image.tmdb.org/t/p/w500/ory8WuAqznTE7lfopTSymHpop2t.jpg','Heavenly Touch','Drama','Jonard is having trouble making ends meet. His mother is suffering from depression, and he and his sister are forced to quit school in order to take care of her. One day, Jonard meets up his friend Rodel, and Rodel introduces him to the world of massage parlors. Rodel teaches him massage, and brings him to Heavenly Touch, a syndicate-run massage parlor that mostly caters to homosexuals.',63),(11,'https://image.tmdb.org/t/p/w500/63xYQj1BwRFielxsBDXvHIJyXVm.jpg','Terrifier 3','Horror','Five years after surviving Art the Clown\'s Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they\'re safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.',69),(12,'https://image.tmdb.org/t/p/w500/xFSIygDiX70Esp9dheCgGX0Nj77.jpg','Spellbound','Animation','When a powerful spell turns her parents into giant monsters, a teenage princess must journey into the wild to reverse the curse before it\'s too late.',67),(13,'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg','Deadpool & Wolverine','Action','A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',77),(14,'https://image.tmdb.org/t/p/w500/y1xm0jMIlx9Oo2a3jWNyLGm43sJ.jpg','Levels','Action','After witnessing his girlfriend\'s murder, a man risks everything - including reality itself - to discover the truth.',56),(15,'https://image.tmdb.org/t/p/w500/4dRtXjk1rcsZlaMJpBn6Nh9cTfO.jpg','Arena Wars','Action','In 2045 convicted criminals are given the opportunity to compete on the world\'s #1 televised sporting event, Arena Wars. They must survive 7 rooms and 7 of the most vicious killers in the country. If they win, they regain their freedom.',53),(16,'https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg','Alien: Romulus','Horror','While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.',72),(17,'https://image.tmdb.org/t/p/w500/lqoMzCcZYEFK729d6qzt349fB4o.jpg','The Substance','Drama','A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.',73),(18,'https://image.tmdb.org/t/p/w500/pnXLFioDeftqjlCVlRmXvIdMsdP.jpg','Armor','Action','Armored truck security guard James Brody is working with his son Casey transporting millions of dollars between banks when a team of thieves led by Rook orchestrate a takeover of their truck to seize the riches. Following a violent car chase, Rook soon has the armored truck surrounded and James and Casey find themselves cornered onto a decrepit bridge.',54),(19,'https://image.tmdb.org/t/p/w500/ouCgGNEC7zOIreWIt3ivgzI8XGf.jpg','Pimpinero: Blood and Oil','Action','When Juan, a young gasoline smuggler, is forced to work for a mysterious organization in the desert bordering Colombia and Venezuela, his girlfriend Diana embarks on a journey to uncover the secrets that inhabit this no-man’s-land.',72),(20,'https://image.tmdb.org/t/p/w500/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg','Red One','Action','After Santa Claus (codename: Red One) is kidnapped, the North Pole\'s Head of Security must team up with the world\'s most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.',66);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shows`
--

DROP TABLE IF EXISTS `shows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shows` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie` int DEFAULT NULL,
  `cinema` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `seats` tinyint(1) DEFAULT '100',
  PRIMARY KEY (`id`),
  KEY `cinema_idx` (`cinema`),
  KEY `movie_idx` (`movie`),
  CONSTRAINT `cinema` FOREIGN KEY (`cinema`) REFERENCES `cinema` (`id`),
  CONSTRAINT `movie` FOREIGN KEY (`movie`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shows`
--

LOCK TABLES `shows` WRITE;
/*!40000 ALTER TABLE `shows` DISABLE KEYS */;
/*!40000 ALTER TABLE `shows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `number` varchar(50) DEFAULT NULL,
  `fname` varchar(45) DEFAULT NULL,
  `sname` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `perms` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-06 14:50:52
