-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 05, 2020 at 01:58 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_accounts`
--

DROP TABLE IF EXISTS `tbl_accounts`;
CREATE TABLE IF NOT EXISTS `tbl_accounts` (
  `accounts_id` int(11) NOT NULL AUTO_INCREMENT,
  `accounts_email` varchar(75) NOT NULL,
  `accounts_first_name` varchar(50) NOT NULL,
  `accounts_last_name` varchar(50) NOT NULL,
  `accounts_birthday` varchar(15) NOT NULL,
  `accounts_country` varchar(50) NOT NULL,
  `accounts_username` varchar(50) NOT NULL,
  `accounts_password` varchar(50) NOT NULL,
  PRIMARY KEY (`accounts_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_age_rating`
--

DROP TABLE IF EXISTS `tbl_age_rating`;
CREATE TABLE IF NOT EXISTS `tbl_age_rating` (
  `age_rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `age_rating` varchar(15) NOT NULL,
  PRIMARY KEY (`age_rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_age_rating`
--

INSERT INTO `tbl_age_rating` (`age_rating_id`, `age_rating`) VALUES
(1, 'PG'),
(2, '18A'),
(3, 'G'),
(4, 'R'),
(5, '14A');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genres`
--

DROP TABLE IF EXISTS `tbl_genres`;
CREATE TABLE IF NOT EXISTS `tbl_genres` (
  `genre_id` int(11) NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(50) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_genres`
--

INSERT INTO `tbl_genres` (`genre_id`, `genre_name`) VALUES
(1, 'Action'),
(2, 'Adventure'),
(3, 'Drama'),
(4, 'Sci-Fi'),
(5, 'Horror'),
(6, 'Mystery'),
(7, 'Thriller'),
(8, 'Animation'),
(9, 'Comedy'),
(10, 'Fantasy'),
(11, 'Drama'),
(12, 'Family'),
(13, 'Crime'),
(14, 'War'),
(15, 'Music');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `movie_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `movie_poster` varchar(50) NOT NULL,
  `movie_link` varchar(1000) NOT NULL,
  `movie_year` int(4) NOT NULL,
  `movie_runtime` varchar(15) NOT NULL,
  `movie_description` varchar(1500) NOT NULL,
  PRIMARY KEY (`movie_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movie_id`, `name`, `movie_poster`, `movie_link`, `movie_year`, `movie_runtime`, `movie_description`) VALUES
(1, 'Seven Samurai', 'seven_samurai.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/wJ1TOratCTo\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1954, '3h 27min', 'A veteran samurai, who has fallen on hard times, answers a village\'s request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.'),
(2, 'Forbidden Planet', 'forbidden_planet.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/AxQ9GG6hUDM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1956, '1h 38min', 'When Adams and his crew are sent to investigate the silence from a planet inhabited by scientists, he finds all but two have died. Dr. Morbius and his daughter Altaira have somehow survived a hideous monster which roams the planet. Unknown to Adams, Morbius has made a discovery, and has no intention of sharing it (or his daughter!) with anyone.'),
(3, 'Psycho', 'psycho.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/Wz719b9QUqY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1960, '1h 49min', 'Phoenix office worker Marion Crane is fed up with the way life has treated her. She has to meet her lover Sam in lunch breaks, and they cannot get married because Sam has to give most of his money away in alimony. One Friday, Marion is trusted to bank forty thousand dollars by her employer. Seeing the opportunity to take the money and start a new life, Marion leaves town and heads towards Sam\'s California store. Tired after the long drive and caught in a storm, she gets off the main highway and pulls into the Bates Motel. The motel is managed by a quiet young man called Norman who seems to be dominated by his mother.'),
(4, 'Yellow Submarine', 'yellow_submarine.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/vefJAtG-ZKI\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1968, '1h 30min', 'When the music hating Blue Meanies take over Pepperland and freeze everyone within it, including the protectors, Sgt. Pepper\'s Lonely Hearts Club Band. Captain Fred (Lance Percival) and his Yellow Submarine recruit The Beatles to help save Pepperland. Along the way, they fall through the Sea of Time, Sea of Nothing, Sea of Holes, and more. They meet Jeremy Hillary Boob Ph.D. (Dick Emery) and take him with them along the adventure. When at Pepperland, The Beatles \"rally the land to rebellion\" and take down the Blue Meanies, the four-headed Meanie dog, and the Dreadful Flying Glove (with the songs \"Sgt. Pepper\'s Lonely Hearts Club Band\", \"With A Little Help From My Friends\", \"Hey Bulldog\", \"All You Need is Love\"). In the end, we see all four live-action Beatles singing \"All Together Now\".'),
(5, 'Monty Python and the Holy Grail', 'monty_python.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/B7ATBtt0oMQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1975, '1h 31min', 'History is turned on its comic head when, in 10th century England, King Arthur travels the countryside to find knights who will join him at the Round Table in Camelot. Gathering up the men is a tale in itself but after a bit of a party at Camelot, many decide to leave only to be stopped by God who sends them on a quest: to find the Holy Grail. After a series of individual adventures, the knights are reunited but must face a wizard named Tim, killer rabbits and lessons in the use of holy hand grenades. Their quest comes to an end however when the police intervene - just what you would expect in a Monty Python movie.'),
(6, 'Halloween', 'halloween.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/T5ke9IPTIJQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1978, '1h 31min', 'The year is 1963, the night: Halloween. Police are called to 43 Lampkin Ln. only to discover that 15 year old Judith Myers has been stabbed to death, by her 6 year-old brother, Michael. After being institutionalized for 15 years, Myers breaks out on the night before Halloween. No one knows, nor wants to find out, what will happen on October 31st 1978 besides Myers\' psychiatrist, Dr. Loomis. He knows Michael is coming back to Haddonfield, but by the time the town realizes it, it\'ll be too late for many people.'),
(7, 'Batman', 'batman.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/dgC9Q0uhX70\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1989, '2h 6min', 'Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there\'s a new crime fighter in town - Batman (Michael Keaton). Grissom\'s right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane... After falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. However, he soon reappears as The Joker and starts a reign of terror in Gotham City. Meanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman. She soon starts a relationship with Batman\'s everyday persona, billionaire Bruce Wayne.'),
(8, 'Airplane', 'airplane.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/07pPmCfKi3U\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1980, '1h 28min', 'Still craving for the love of his life, Ted Striker follows Elaine onto the flight that she is working on as a member of the cabin crew. Elaine doesn\'t want to be with Ted anymore, but when the crew and passengers fall ill from food poisoning, all eyes are on Ted.'),
(9, 'Fight Club', 'fight_club.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/qtRKdVHc-cE\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1999, '2h 19min', 'A nameless first-person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler\'s fight club, he must accept the awful truth that Tyler may not be who he says he is.'),
(10, 'Space Jam', 'space_jam.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/oKNy-MWjkcU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1996, '1h 28min', 'Swackhammer, owner of the amusement park planet Moron Mountain is desperate get new attractions and he decides that the Looney Tune characters would be perfect. He sends his diminutive underlings to get them to him, whether Bugs Bunny and Co. want to go or not. Well armed for their size, Bugs Bunny is forced to trick them into agreeing to a competition to determine their freedom. Taking advantage of their puny and stubby legged foes, the gang selects basketball for the surest chance of winning. However, the Nerdlucks turn the tables and steal the talents of leading professional basketball stars to become massive basketball bruisers known as the Monstars. In desperation, Bugs Bunny calls on the aid of Michael Jordan, the Babe Ruth of basketball, to help them have a chance at winning their freedom.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies_genre_rating`
--

DROP TABLE IF EXISTS `tbl_movies_genre_rating`;
CREATE TABLE IF NOT EXISTS `tbl_movies_genre_rating` (
  `movies_genre_id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_id` int(5) NOT NULL,
  `genre_id` int(5) NOT NULL,
  `rating_id` int(5) NOT NULL,
  PRIMARY KEY (`movies_genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies_genre_rating`
--

INSERT INTO `tbl_movies_genre_rating` (`movies_genre_id`, `movie_id`, `genre_id`, `rating_id`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 1, 3, 1),
(4, 2, 1, 1),
(5, 2, 2, 1),
(6, 2, 4, 1),
(7, 3, 5, 2),
(8, 3, 6, 2),
(9, 3, 7, 2),
(10, 4, 8, 3),
(11, 4, 2, 3),
(12, 4, 9, 3),
(13, 5, 2, 1),
(14, 5, 9, 1),
(15, 5, 10, 1),
(16, 6, 5, 4),
(17, 6, 7, 4),
(18, 7, 1, 1),
(19, 7, 2, 1),
(20, 8, 9, 5),
(21, 9, 3, 4),
(22, 10, 8, 3),
(23, 10, 2, 3),
(24, 10, 9, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music_age_rating`
--

DROP TABLE IF EXISTS `tbl_music_age_rating`;
CREATE TABLE IF NOT EXISTS `tbl_music_age_rating` (
  `music_age_rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `music_age_rating` varchar(5) NOT NULL,
  PRIMARY KEY (`music_age_rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music_age_rating`
--

INSERT INTO `tbl_music_age_rating` (`music_age_rating_id`, `music_age_rating`) VALUES
(1, 'C'),
(2, 'E');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music_genres`
--

DROP TABLE IF EXISTS `tbl_music_genres`;
CREATE TABLE IF NOT EXISTS `tbl_music_genres` (
  `music_genre_id` int(11) NOT NULL AUTO_INCREMENT,
  `music_genre_name` varchar(50) NOT NULL,
  PRIMARY KEY (`music_genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music_genres`
--

INSERT INTO `tbl_music_genres` (`music_genre_id`, `music_genre_name`) VALUES
(1, 'Country'),
(2, 'Rock'),
(3, 'R&B'),
(4, 'Folk Rock'),
(5, 'Hard Rock'),
(6, 'Rap'),
(7, 'New-Wave'),
(8, 'Alternative Rock');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shows`
--

DROP TABLE IF EXISTS `tbl_shows`;
CREATE TABLE IF NOT EXISTS `tbl_shows` (
  `show_id` int(11) NOT NULL AUTO_INCREMENT,
  `show_name` varchar(50) NOT NULL,
  `show_poster` varchar(50) NOT NULL,
  `show_link` varchar(1000) NOT NULL,
  `show_year` int(4) NOT NULL,
  `show_description` varchar(1500) NOT NULL,
  PRIMARY KEY (`show_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_shows`
--

INSERT INTO `tbl_shows` (`show_id`, `show_name`, `show_poster`, `show_link`, `show_year`, `show_description`) VALUES
(1, 'I Love Lucy', 'i_love_lucy.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/DTe74_dhNGU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1951, 'Cuban Bandleader Ricky Ricardo would be happy if his wife Lucy would just be a housewife. Instead she tries constantly to perform at the Tropicana where he works, and make life comically frantic in the apartment building they share with landlords Fred and Ethel Mertz. The first major show to be put on film rather than kinescope.'),
(2, 'Adventures of Superman', 'superman.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/p0swAKS-5qA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1952, '\"Faster than a speeding bullet! More powerful than a locomotive! Able to leap tall buildings at a single bound!\" Mild-mannered reporter for the Daily Planet is really the greatest superhero of them all who \"fights a never-ending battle for truth, justice, and the American way!\"'),
(3, 'Gilligan\'s Island', 'gilligan.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/_-RCuyl0X90\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1964, 'During what was supposed to be a three-hour tour, the S.S. Minnow is shipwrecked on an uncharted tropical island following a typhoon. The seven castaways include the Minnow\'s blustery captain, his bumbling first mate Gilligan, a millionaire couple named the Howells, curvaceous movie star Ginger Grant, sexy farm girl Mary Ann Summers, and a science professor known as the Professor. Despite their dire situation, the castaways managed to survive on a diet made up of fish and coconut cream pie, and were aided by their trusty transistor radio and a seemingly never-ending parade of guest stars who managed to drop by their \"deserted\" island (including a big game hunter, a movie producer, a mad scientist, a rock band, Russian cosmonauts, foreign spies and a jungle boy), yet never managed to bring the castaways to safety.'),
(4, 'The Flintstones', 'the_flintstones.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/1VjevfCGNfk\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1960, 'This popular animated television cartoon featured two Stone Age families, the Flintstones and their neighbors, the Rubbles. Much of the humor was based on its comic portrayals of modern conveniences, reinterpreted using Stone Age \'technology.\' Most notably were their cars, complete with absence of floorboards to allow them to be \'foot-powered.\''),
(5, 'The Incredible Hulk', 'hulk.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/z9MysTXM_P4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1977, 'Dr. David Banner is a brilliant scientist but, one day, a laboratory experiment that he is working on goes terribly awry. Since that time, whenever he is under extreme stress, his body undergoes a transmogrification and he morphs into the Incredible Hulk. The Hulk is about seven feet tall, hugely muscular and powerful, and has bright green skin. After destroying whatever threatens Dr. Banner, he morphs back to normal human form with only amnesia and tattered clothing as evidence of what just transpired. As you can well imagine, this situation is quite troubling for Dr. Banner and causes him a great amount of problems. All the while, he is pursued by Jack McGee, an investigative reporter who believes that the Hulk is a deadly menace whose exposure would enhance his career.'),
(6, 'M*A*S*H', 'mash.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/2NWDgMpQvu8\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1972, 'The 4077th Mobile Army Surgical Hospital is stuck in the middle of the Korean War. With little help from the circumstance in which they find themselves, they are forced to make their own fun. Fond of practical jokes and revenge, the doctors, nurses, administrators, and soldiers often find ways of making wartime life bearable. Nevertheless, the war goes on.'),
(7, 'He-Man and the Masters of the Universe', 'he-man.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/KBjhAqXg8MY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1983, 'In a distant and mystical land, wimpy Prince Adam leads the life of royalty. Unknown to all but a few close friends/allies, Prince Adam is actually a hero, the mighty He-Man. Together with his friends, (such as Teela; her father, a man-at-arms; mysterious Orko and his mighty friend/horse substitute Battle Cat), He-Man battles the evil Skeletor and his minions for control of the world, and, more importantly, for the control, power and \"honor of Greyskull,\" the mysterious castle from which He-Man derives his powers.'),
(8, 'Knight Rider', 'knight_rider.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/ES8yY7RpLIQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1982, 'Michael Long is a crimefighter who is seriously wounded during his work. Nursed back to health by a mysterious benefactor (chairman of the Knight Industries), he regains consciousness a new man with a new face and a new name: Michael Knight. His mysterious benefactor (through the guise of associate Devon Miles) provides Michael with equipment and support so that he can continue his crime fighting work. The most notable piece of equipment supplied, is \"KITT\", a high-performance sports car fitted with artificial intelligence.'),
(9, 'Beavis and Butt-Head', 'beavis_and_butthead.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/USDmK3Sqz8E\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1993, 'Animated MTV series about two teenage heavy-metal music fans who occasionally do idiotic things because they\'re bored. For them, everything is \"cool\" or \"sucks.\"'),
(10, 'The Fresh Prince of Bel-Air', 'fresh_prince.jpg', '<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/1nCqRmx3Dnw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 1990, 'When Will (Will Smith), an inner-city teenager from Philly is sent by his mother to live with his relatives (the Banks) in Bel-Air, everybody is in for a surprise. It is funny how influence can go both ways.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shows_genre_rating`
--

DROP TABLE IF EXISTS `tbl_shows_genre_rating`;
CREATE TABLE IF NOT EXISTS `tbl_shows_genre_rating` (
  `shows_genre_rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `show_id` int(5) NOT NULL,
  `genre_id` int(5) NOT NULL,
  `rating_id` int(5) NOT NULL,
  PRIMARY KEY (`shows_genre_rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_shows_genre_rating`
--

INSERT INTO `tbl_shows_genre_rating` (`shows_genre_rating_id`, `show_id`, `genre_id`, `rating_id`) VALUES
(1, 1, 9, 3),
(2, 1, 12, 3),
(3, 2, 1, 1),
(4, 2, 2, 1),
(5, 2, 13, 1),
(6, 3, 9, 3),
(7, 3, 12, 3),
(8, 4, 8, 3),
(9, 4, 2, 3),
(10, 4, 9, 3),
(11, 5, 1, 1),
(12, 5, 2, 1),
(13, 5, 3, 1),
(14, 6, 9, 1),
(15, 6, 3, 1),
(16, 6, 14, 1),
(17, 7, 8, 3),
(18, 7, 1, 3),
(19, 7, 2, 3),
(20, 8, 1, 1),
(21, 8, 13, 1),
(22, 8, 3, 1),
(23, 9, 8, 5),
(24, 9, 9, 5),
(25, 9, 15, 5),
(26, 10, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_songs`
--

DROP TABLE IF EXISTS `tbl_songs`;
CREATE TABLE IF NOT EXISTS `tbl_songs` (
  `song_id` int(11) NOT NULL AUTO_INCREMENT,
  `song_name` varchar(50) NOT NULL,
  `song_artist` varchar(50) NOT NULL,
  `song_cover_art` varchar(50) NOT NULL,
  `song_file` varchar(50) NOT NULL,
  `song_year` int(4) NOT NULL,
  PRIMARY KEY (`song_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_songs`
--

INSERT INTO `tbl_songs` (`song_id`, `song_name`, `song_artist`, `song_cover_art`, `song_file`, `song_year`) VALUES
(1, 'I Walk The Line', 'Johnny Cash', 'i_walk_the_line.jpg', 'i_walk_the_line.mp3', 1956),
(2, 'Johnny B. Goode', 'Chuck Berry', 'johnny_b_goode.jpg', 'johnny_b_goode.mp3', 1958),
(3, 'Hit the Road Jack', 'Ray Charles', 'hit_the_road_jack.jpg', 'hit_the_road_jack.mp3', 1961),
(4, 'Fortunate Son', 'Creedence Clearwater Revival', 'fortunate_son.jpg', 'fortunate_son.mp3', 1969),
(5, 'Cat\'s in the Cradle', 'Harry Chapin', 'cats_in_the_cradle.jpg', 'cats_in_the_cradle.mp3', 1974),
(6, 'I Walk The Line', 'Johnny Cash', 'i_walk_the_line.jpg', 'i_walk_the_line.mp3', 1956),
(7, 'Johnny B. Goode', 'Chuck Berry', 'johnny_b_goode.jpg', 'johnny_b_goode.mp3', 1958),
(8, 'Hit the Road Jack', 'Ray Charles', 'hit_the_road_jack.jpg', 'hit_the_road_jack.mp3', 1961),
(9, 'Fortunate Son', 'Creedence Clearwater Revival', 'fortunate_son.jpg', 'fortunate_son.mp3', 1969),
(10, 'Cat\'s in the Cradle', 'Harry Chapin', 'cats_in_the_cradle.jpg', 'cats_in_the_cradle.mp3', 1974),
(11, 'Ain\'t Talkin\' \'bout Love', 'Van Halen', 'aint_talkin_bout_love.jpg', 'aint_talkin_bout_love.mp3', 1978),
(12, 'Rock Box', 'Run-DMC', 'rock_box.jpg', 'rock_box.mp3', 1984),
(13, 'I Ran (So Far Away)', 'Flock of Seagulls', 'i_ran.jpg', 'i_ran.mp3', 1982),
(14, 'C.R.E.A.M.', 'Wu-Tang Clan', 'cream.jpg', 'cream.mp3', 1993),
(15, 'Song 2', 'Blur', 'song_2.jpg', 'song_2.mp3', 1997);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_songs_genre_rating`
--

DROP TABLE IF EXISTS `tbl_songs_genre_rating`;
CREATE TABLE IF NOT EXISTS `tbl_songs_genre_rating` (
  `songs_genre_rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `song_id` int(5) NOT NULL,
  `music_genre_id` int(5) NOT NULL,
  `music_age_rating_id` int(5) NOT NULL,
  PRIMARY KEY (`songs_genre_rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_songs_genre_rating`
--

INSERT INTO `tbl_songs_genre_rating` (`songs_genre_rating_id`, `song_id`, `music_genre_id`, `music_age_rating_id`) VALUES
(1, 1, 1, 1),
(2, 2, 2, 1),
(3, 3, 3, 1),
(4, 4, 2, 1),
(5, 5, 4, 1),
(6, 6, 5, 2),
(7, 7, 6, 2),
(8, 8, 7, 1),
(9, 9, 6, 2),
(10, 10, 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `users_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_accounts_id` int(10) NOT NULL,
  `users_icon` varchar(100) NOT NULL,
  `users_permissions` int(1) NOT NULL,
  `users_display_name` varchar(50) NOT NULL,
  `users_bg_colour` varchar(50) NOT NULL,
  PRIMARY KEY (`users_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
