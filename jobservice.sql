-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 09, 2018 alle 18:44
-- Versione del server: 10.1.22-MariaDB
-- Versione PHP: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobservice`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `categorie`
--

CREATE TABLE `categorie` (
  `id_categoria` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `categorie`
--

INSERT INTO `categorie` (`id_categoria`, `nome`) VALUES
(1, 'Architetto'),
(2, 'Autista'),
(3, 'Avvocato'),
(4, 'Baby Sitter'),
(5, 'Cameriere'),
(6, 'Commercialista'),
(7, 'Elettricista'),
(8, 'Idraulico'),
(9, 'Falegname'),
(10, 'Fabbro'),
(11, 'Geometra');

-- --------------------------------------------------------

--
-- Struttura della tabella `preferiti`
--

CREATE TABLE `preferiti` (
  `id_preferito` int(10) NOT NULL,
  `id_professionista` int(10) NOT NULL,
  `id_utente` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `preferiti`
--

INSERT INTO `preferiti` (`id_preferito`, `id_professionista`, `id_utente`) VALUES
(1, 11, 5),
(2, 12, 4),
(4, 13, 4),
(5, 12, 5),
(6, 14, 5),
(11, 14, 4),
(15, 13, 5),
(16, 16, 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `prenotazioni`
--

CREATE TABLE `prenotazioni` (
  `id_prenotazione` int(10) UNSIGNED NOT NULL,
  `giorno` varchar(10) NOT NULL,
  `ora` varchar(5) NOT NULL,
  `id_utente` int(10) UNSIGNED NOT NULL,
  `id_professionista` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `prenotazioni`
--

INSERT INTO `prenotazioni` (`id_prenotazione`, `giorno`, `ora`, `id_utente`, `id_professionista`) VALUES
(1, '2018-06-20', '20:00', 4, 11),
(2, '2018-06-29', '20:00', 5, 15),
(3, '2018-07-19', '19:00', 4, 13),
(4, '2018-08-22', '19:00', 4, 14),
(5, '2018-08-16', '20:00', 4, 2),
(6, '2018-07-26', '20:00', 4, 18),
(7, '2018-10-17', '19:00', 4, 12),
(8, '2018-06-28', '15:00', 4, 10),
(9, '2018-06-27', '15:00', 5, 1),
(10, '2018-06-29', '20:00', 5, 15),
(12, '2018-06-29', '19:00', 5, 15),
(13, '2018-06-29', '15:00', 4, 15);

-- --------------------------------------------------------

--
-- Struttura della tabella `professionisti`
--

CREATE TABLE `professionisti` (
  `id_professionista` int(10) NOT NULL,
  `nomeprofessionista` varchar(255) NOT NULL,
  `cognomeprofessionista` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `citta` varchar(255) NOT NULL,
  `eta` int(3) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `id_categoria` int(10) UNSIGNED NOT NULL,
  `img` varchar(455) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `professionisti`
--

INSERT INTO `professionisti` (`id_professionista`, `nomeprofessionista`, `cognomeprofessionista`, `email`, `citta`, `eta`, `telefono`, `id_categoria`, `img`) VALUES
(1, 'Luca', 'Rossi', 'lucarossi@gmail.com', 'Teramo', 28, '3245876950', 1, 'assets/icon/foto_profilo_default.png'),
(2, 'Mario', 'Bianchi', 'mariobianchi@gmail.com', 'Chieti', 56, '3482918274', 1, 'assets/icon/15.jpg'),
(3, 'Ale', 'Nuzio', 'alenuzio@libero.it', 'Pescara', 52, '3212345607', 2, 'assets/icon/foto_profilo_default.png'),
(4, 'Gianluca', 'Frisco', 'gianf@hotmail.com', 'Tollo', 44, '3295445607', 2, 'assets/icon/13.jpg'),
(5, 'Laura', 'Verdi', 'laura.verdi@gmail.com', 'San Benedetto Del Tronto', 45, '3493872819', 3, 'assets/icon/5.jpg'),
(6, 'Moana', 'Capo', 'moana.capo@gmail.com', 'Teramo', 28, '3212345432', 4, 'assets/icon/1.jpg'),
(7, 'Simona', 'Petraccia', 'simona.pet@gmail.com', 'Chieti', 30, '3293874632', 5, 'assets/icon/foto_profilo_default.png'),
(8, 'Alessio', 'Sante', 'alessiosante@gmail.com', 'Chieti', 35, '3212345678', 6, 'assets/icon/foto_profilo_default.png'),
(9, 'Benedetto', 'Di Carlo', 'benedettodicarlo@gmail.com', 'Pescara', 45, '3283452380', 7, 'assets/icon/foto_profilo_default.png'),
(10, 'Fabio', 'Sante', 'fabiosante@gmail.com', 'San Benedetto', 26, '324839275', 8, 'assets/icon/foto_profilo_default.png'),
(11, 'Marco', 'Di Basilico', 'marcodibasilico@gmail.com', 'San Benedetto del Tronto', 23, '3214900332', 9, 'assets/icon/foto_profilo_default.png'),
(12, 'Marco', 'Aviero', 'marcoaviero@gmail.com', 'Tollo', 32, '329883002', 10, 'assets/icon/foto_profilo_default.png'),
(13, 'Lucrezia', 'Leone', 'leonelucrezia@gmail.com', 'Roma', 50, '3313459689', 4, 'assets/icon/foto_profilo_default.png'),
(14, 'Sharon', 'Valle', 's.valle@gmail.com', 'Roma', 58, '3245674321', 5, 'assets/icon/foto_profilo_default.png'),
(15, 'Mario', 'Di Camillo', 'marcodc@gmail.com', 'Ancona', 65, '3456784321', 7, 'assets/icon/foto_profilo_default.png'),
(16, 'Benedetta', 'Bonaduce', 'benedettabona@gmail.com', 'Ancona', 25, '3245968574', 10, 'assets/icon/3.jpg'),
(17, 'Benedetto', 'Di Carlo', 'benedettodicarlo@gmail.com', 'Pescara', 36, '3212345678', 6, 'assets/icon/foto_profilo_default.png'),
(18, 'Giulio', 'Manetta', 'manettag@gmail.com', 'Firenze', 48, '3234567678', 8, 'assets/icon/foto_profilo_default.png'),
(19, 'Nicola', 'Pichelli', 'nicolap@gmail.com', 'Firenze', 45, '3456733212', 9, 'assets/icon/foto_profilo_default.png'),
(20, 'Rita', 'Di Carlo', 'rita.dic@gmail.com', 'Teramo', 52, '3245645321', 3, 'assets/icon/foto_profilo_default.png'),
(22, 'Antonio', 'Bove', 'boveantonio.geom@tiscali.it', 'Chieti', 50, '3398217352', 11, 'assets/icon/foto_profilo_default.png');

-- --------------------------------------------------------

--
-- Struttura della tabella `sessioni`
--

CREATE TABLE `sessioni` (
  `sessione_id` int(10) UNSIGNED NOT NULL,
  `token` varchar(255) NOT NULL,
  `id_utente` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `sessioni`
--

INSERT INTO `sessioni` (`sessione_id`, `token`, `id_utente`) VALUES
(120, '4755064566629772204', 2),
(121, '1174161389945937874', 2),
(122, '7295616082723889173', 2),
(123, '1630427623028742387', 2),
(124, '6901005260439659073', 2),
(125, '5990893369874494660', 2),
(126, '6701286428763309081', 2),
(127, '6811582297342003589', 2),
(128, '7563215324061866581', 2),
(129, '4983052992048104506', 2),
(130, '5039638383470317251', 2),
(131, '7082275197876110608', 2),
(132, '1178234018730374903', 2),
(133, '5294276784091456164', 2),
(134, '1755758774461312063', 2),
(135, '4545923316593194423', 2),
(136, '7079458107881562232', 2),
(137, '8755381968374702497', 3),
(138, '2029638283500918754', 2),
(139, '8520055863866847763', 2),
(140, '6306635263500091667', 2),
(141, '7247193479285080569', 2),
(142, '2756199375222049052', 2),
(143, '3732126114745813734', 3),
(144, '8578099192978060109', 2),
(145, '27249428767174608', 2),
(146, '8186799393288920464', 2),
(147, '3371862156138107211', 2),
(148, '9042761707659901287', 3),
(149, '5457078565902453210', 2),
(150, '5285040291929786283', 3),
(151, '3285835479984562545', 2),
(152, '1386946151056560903', 2),
(153, '2801124542681294592', 3),
(154, '1783272611654723542', 3),
(155, '5917584045060760051', 2),
(156, '498805678454126918', 2),
(157, '5895737426020424283', 3),
(158, '2438620743846003506', 2),
(159, '7487263191676465508', 2),
(160, '7582024707492083649', 2),
(161, '7097314477936127766', 2),
(162, '5348322675653296701', 2),
(163, '2065743065711418060', 3),
(164, '6033729861837694861', 3),
(165, '7610731722483176896', 2),
(166, '4127506133716195083', 2),
(167, '6254736031862228055', 2),
(168, '5390944257828675608', 2),
(169, '8219850613530437597', 2),
(170, '1677139106741069240', 2),
(171, '3872930325275527015', 2),
(172, '876071353033881316', 2),
(173, '4140553766811776982', 2),
(174, '5310173442338527756', 2),
(175, '7701371241993694315', 2),
(176, '504472487725599676', 3),
(177, '8541626538181846985', 3),
(178, '2139249432014917418', 3),
(179, '8302891957032683374', 4),
(180, '400781677012296689', 4),
(181, '5843313239426480837', 4),
(182, '6780252344007710666', 4),
(183, '5482268297068446141', 4),
(184, '4719247185711312531', 4),
(185, '1686518688327331292', 4),
(186, '2007611722589800826', 4),
(187, '4212791676968514032', 4),
(188, '6019660201690116145', 4),
(189, '1545537790109883486', 4),
(190, '8252053699461677733', 2),
(191, '8439302841791401944', 4),
(192, '123011142578880884', 2),
(193, '8776970779081854837', 4),
(194, '3612847858399161802', 2),
(195, '1103440593226674422', 4),
(196, '970975664847370790', 2),
(197, '7083703893495034589', 4),
(198, '3707184091089254157', 2),
(199, '8393317728169295329', 2),
(200, '4188249187349528736', 4),
(201, '6110201433562441075', 2),
(202, '8963047696978713644', 2),
(203, '1955221083476821546', 4),
(204, '6495382683038992053', 4),
(205, '5701017942618865421', 2),
(206, '7646223370724240122', 4),
(207, '5016361607481949321', 4),
(208, '7744606652856823458', 4),
(209, '8347644419572692395', 4),
(210, '5640962386974430265', 4),
(211, '3242028550801628757', 4),
(212, '2392136406417169221', 4),
(213, '611413925921824352', 4),
(214, '3656286237568690665', 4),
(215, '8748235635355568739', 4),
(216, '3117286263222489558', 4),
(217, '3527107154286831322', 4),
(218, '8252087919469318', 4),
(219, '2563568717396355148', 4),
(220, '8188297165531984701', 4),
(221, '5649443045402315487', 4),
(222, '2194614968360528764', 4),
(223, '5224776466896423314', 4),
(224, '8772195683423643459', 4),
(225, '6978203841428619502', 4),
(226, '1004531900086181581', 4),
(227, '6952134739504787060', 2),
(228, '1506564805486044961', 4),
(229, '1924577439168164012', 2),
(230, '7239392701333873296', 4),
(231, '8902343911014071376', 4),
(232, '2065263559916883791', 4),
(233, '3624867500908183293', 4),
(234, '230681315275475111', 4),
(235, '3877593083908273121', 4),
(236, '2952842035778376549', 4),
(237, '1800234025951800104', 4),
(238, '1211913542789144636', 4),
(239, '2291137287448742685', 2),
(240, '8916299509482734927', 4),
(241, '8408372829523185401', 4),
(242, '4887431141397846071', 4),
(243, '7824812762242260409', 4),
(244, '5483316753399352261', 4),
(245, '6869152527050760712', 4),
(246, '4250635535264220599', 4),
(247, '7079248838123839002', 4),
(248, '7541431865644273014', 4),
(249, '6754946103095913490', 4),
(250, '7576075861826398172', 4),
(251, '1928837583282970376', 4),
(252, '489792420674066218', 4),
(281, '3375961151576073589', 4),
(282, '3075730248192732663', 4),
(283, '4825582570377769054', 4),
(295, '1172891568372420447', 5),
(306, '6680997361610667721', 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id_utente` int(10) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cognome` varchar(255) NOT NULL,
  `eta` int(3) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `citta` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `datadinascita` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id_utente`, `nome`, `cognome`, `eta`, `telefono`, `citta`, `email`, `datadinascita`, `password`, `username`) VALUES
(2, 'teresa', 'bove', 22, '3278385503', 'l\'aquila', 'teresa.4us@gmail.com', '1995-08-26', 'tatta', 'teresabove'),
(3, 'amleto', 'di salle', 45, '7894561230', 'roma', 'amletodisalle@univaq.it', '1987-03-03', 'univaq', 'amletuccio'),
(4, 'Fran', 'Criber', 22, '3895118493', 'Tollo', 'francescacriber@gmail.com', '1995-03-28', 'fracri', 'fracri'),
(5, 'Marc', 'd\'avier', 22, '3336622252', 'Ikea', 'marco@marco.it', '1995-08-11', 'marco', 'marco');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indici per le tabelle `preferiti`
--
ALTER TABLE `preferiti`
  ADD PRIMARY KEY (`id_preferito`),
  ADD KEY `id_utente` (`id_utente`),
  ADD KEY `id_professionista` (`id_professionista`);

--
-- Indici per le tabelle `prenotazioni`
--
ALTER TABLE `prenotazioni`
  ADD PRIMARY KEY (`id_prenotazione`),
  ADD KEY `fk_id_professionista` (`id_professionista`),
  ADD KEY `fk1_id_utente` (`id_utente`);

--
-- Indici per le tabelle `professionisti`
--
ALTER TABLE `professionisti`
  ADD PRIMARY KEY (`id_professionista`),
  ADD KEY `fk_id_categoria` (`id_categoria`);

--
-- Indici per le tabelle `sessioni`
--
ALTER TABLE `sessioni`
  ADD PRIMARY KEY (`sessione_id`),
  ADD KEY `fk_id_utente` (`id_utente`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id_utente`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id_categoria` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT per la tabella `preferiti`
--
ALTER TABLE `preferiti`
  MODIFY `id_preferito` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT per la tabella `prenotazioni`
--
ALTER TABLE `prenotazioni`
  MODIFY `id_prenotazione` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT per la tabella `professionisti`
--
ALTER TABLE `professionisti`
  MODIFY `id_professionista` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT per la tabella `sessioni`
--
ALTER TABLE `sessioni`
  MODIFY `sessione_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=307;
--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id_utente` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `preferiti`
--
ALTER TABLE `preferiti`
  ADD CONSTRAINT `preferiti_ibfk_1` FOREIGN KEY (`id_utente`) REFERENCES `utenti` (`id_utente`),
  ADD CONSTRAINT `preferiti_ibfk_2` FOREIGN KEY (`id_professionista`) REFERENCES `professionisti` (`id_professionista`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
