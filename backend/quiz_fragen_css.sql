-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2023 at 04:57 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz_fragen_css`
--

-- --------------------------------------------------------

--
-- Table structure for table `auswahlmöglichkeiten`
--

CREATE TABLE `auswahlmöglichkeiten` (
  `fragen_nummer` int(100) NOT NULL,
  `ist_richtig` tinyint(100) NOT NULL DEFAULT 0,
  `text` text NOT NULL,
  `id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auswahlmöglichkeiten`
--

INSERT INTO `auswahlmöglichkeiten` (`fragen_nummer`, `ist_richtig`, `text`, `id`) VALUES
(1, 0, 'Cascading Script Style', 1),
(1, 1, 'Cascading Style Sheets', 2),
(1, 0, 'Cascading Syntax Sheets', 3),
(1, 0, 'Cascading Sheet Styles', 4),
(2, 0, 'border-color', 5),
(2, 1, 'border-style', 6),
(2, 0, 'border-width', 7),
(2, 0, 'border-radius', 8),
(3, 0, 'Verwenden eines Hexadezimalwerts', 9),
(3, 0, 'Mit einem Schlüsselwort wie „red“', 10),
(3, 0, 'Verwenden eines RGB Werts', 11),
(3, 1, 'Alles das oben Genannte', 12),
(4, 0, 'padding', 13),
(4, 0, 'margin-top', 14),
(4, 1, 'margin', 15),
(4, 0, 'margin-right', 16),
(5, 1, 'block', 17),
(5, 0, 'grid', 18),
(5, 0, 'inline-block', 19),
(5, 0, 'flex', 20),
(6, 0, 'static', 21),
(6, 1, 'relative', 22),
(6, 0, 'absolute', 23),
(6, 0, 'fixed', 24),
(7, 0, 'font-style', 25),
(7, 0, 'font-family', 26),
(7, 1, 'font-size', 27),
(7, 0, 'font-weight', 28),
(8, 1, 'border-color', 29),
(8, 0, 'border-style', 30),
(8, 0, 'border-width', 31),
(8, 0, 'border-radius', 32),
(9, 0, 'margin-right', 33),
(9, 0, 'margin-top', 34),
(9, 1, 'margin-left', 35),
(9, 0, 'margin-bottom', 36),
(10, 0, 'color', 37),
(10, 0, 'border-color', 38),
(10, 1, 'background-color', 39),
(10, 0, 'color-scheme', 40),
(11, 1, 'fixed', 41),
(11, 0, 'absolute', 42),
(11, 0, 'static', 43),
(11, 0, 'sticky', 44),
(12, 0, 'block', 45),
(12, 0, 'inline', 46),
(12, 1, 'inline-block', 47),
(12, 0, 'grid', 48);

-- --------------------------------------------------------

--
-- Table structure for table `fragen`
--

CREATE TABLE `fragen` (
  `fragen_nummer` int(11) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fragen`
--

INSERT INTO `fragen` (`fragen_nummer`, `text`) VALUES
(1, 'Wofür steht CSS?'),
(2, 'Welche CSS-Eigenschaft wird verwendet, um den Rahmen eines Elements anzuzeigen.'),
(3, 'Wie spezifizieren Sie eine Farbe in CSS?'),
(4, 'Welche CSS Eigenschaft wird verwendet, um den Margin auf allen Seiten anzugeben?'),
(5, 'Was ist der Standardwert der display Eigenschaft?'),
(6, 'Welcher Wert der CSS Positionseigenschaft platziert ein Element relativ zu seiner normalen Position?'),
(7, 'Welche CSS Eigenschaft wird verwendet, um die Schriftgröße anzugeben?'),
(8, 'Welche CSS Eigenschaft wird verwendet, um die Rahmenfarbe anzugeben?'),
(9, 'Welche CSS Eigenschaft wird verwendet, um den Margin auf der linken Seite eines Elements anzugeben?'),
(10, 'Welche CSS Eigenschaft wird verwendet, um die Hintergrundfarbe eines Elements anzugeben?'),
(11, 'Welche CSS Positionseigenschaft wird verwendet, um ein Element an Ort und Stelle zu fixieren?'),
(12, 'Welcher Wert der CSS Positionseigenschaft bewirkt, dass sich ein Element wie ein Inline-Element verhält, ermöglicht es Ihnen aber trotzdem, eine Breite und Höhe festzulegen?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auswahlmöglichkeiten`
--
ALTER TABLE `auswahlmöglichkeiten`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fragen`
--
ALTER TABLE `fragen`
  ADD PRIMARY KEY (`fragen_nummer`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auswahlmöglichkeiten`
--
ALTER TABLE `auswahlmöglichkeiten`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
