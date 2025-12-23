-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 22. Feb 2023 um 15:17
-- Server-Version: 10.4.24-MariaDB
-- PHP-Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `quiz_fragen`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `auswahlmöglichkeiten`
--

CREATE TABLE `auswahlmöglichkeiten` (
  `fragen_nummer` int(100) NOT NULL,
  `ist_richtig` tinyint(100) NOT NULL DEFAULT 0,
  `text` text NOT NULL,
  `id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `auswahlmöglichkeiten`
--

INSERT INTO `auswahlmöglichkeiten` (`fragen_nummer`, `ist_richtig`, `text`, `id`) VALUES
(1, 1, 'Hyper Text Markup Languge\r\n', 1),
(1, 0, ' Home Tool Markup Language\r\n', 2),
(1, 0, ' Hyperlinks and Text Markup Language\r\n', 3),
(1, 0, ' Hyperlinks and Text Markup Land\r\n', 4),
(2, 1, '&lt; href=\"url\" target=\"_blank\"&gt;', 5),
(2, 0, ' 	\n&lt; href=\"url\" target=\"new\"&gt;', 6),
(2, 0, ' &lt; href=\"url\" new&gt;', 7),
(2, 0, ' &lt; url=\"neu_tab\"&gt;', 8),
(3, 0, 'Mozilla', 9),
(3, 1, ' The World Wide Web Consortium', 10),
(3, 0, 'Google', 11),
(3, 0, 'Microsoft', 12),
(4, 0, '&lt;h6&gt;', 13),
(4, 0, '&lt;heading&gt;', 14),
(4, 1, '&lt;h1&gt;', 15),
(4, 0, '&lt;head&gt;', 16),
(5, 1, '&lt;br&gt;', 17),
(5, 0, '&lt;break&gt;', 18),
(5, 0, '&lt;ib&gt;', 19),
(5, 0, '&lt;breakLine&gt;', 20),
(6, 1, '/', 21),
(6, 0, '<', 22),
(6, 0, '*', 23),
(6, 0, ')', 24),
(7, 0, '&lt;dl&gt;', 30),
(7, 0, '&lt;ul&gt;', 31),
(7, 0, '&lt;list&gt;', 32),
(7, 1, '&lt;ol&gt;', 33),
(8, 0, '&lt;head&gt;', 37),
(8, 1, '&lt;title&gt;', 38),
(8, 0, '&lt;meta&gt;', 39),
(8, 0, '&lt;heading&gt;', 40),
(9, 0, 'HTML wird benutzt, um Anwendungen zu programmieren.', 41),
(9, 1, 'HTML wird benutzt, um Webseiten zu erstellen.', 42),
(9, 0, 'HTML wird benutzt, damit man die Webseiten formatieren kann.', 43),
(9, 0, 'HTML wird benutzt, damit man Verbindung mit den Datenbanken zu erstellen.', 44),
(10, 0, 'Befehle, die der Interaktivität dienen\r\n', 45),
(10, 0, 'Befehle, die sich selbst aktualisieren (z.B. Counter)\r\n', 46),
(10, 1, 'Angaben zu Autor, Erstellungsdatum, Stichwörtern,...\r\n', 47),
(10, 0, 'Befehle, um die HTML Datei im Browser zu zeigen.', 48),
(11, 0, 'Lables', 49),
(11, 0, 'Attribute', 50),
(11, 1, 'Tags', 51),
(11, 0, 'codes', 52),
(12, 1, '&lt;a&gt;', 63),
(12, 0, '&lt;Link&gt;', 64),
(12, 0, '&lt;p&gt;', 65),
(12, 0, '&lt;hyL&gt;', 66),
(12, 0, '&lt;il&gt;', 67);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `fragen`
--

CREATE TABLE `fragen` (
  `fragen_nummer` int(11) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `fragen`
--

INSERT INTO `fragen` (`fragen_nummer`, `text`) VALUES
(1, 'wofür steht HTML?\n\n'),
(2, 'Wie können Sie einen Link in einem neuen Tab/Browserfenster öffnen?\r\n'),
(3, 'Wer macht die Webstandards?\r\n'),
(4, 'Wählen Sie das richtige HTML-Element für die größte Überschrift (heading):'),
(5, 'Was ist das richtige HTML-Element zum Einfügen eines Zeilenumbruchs?'),
(6, 'Welches Zeichen wird verwendet, um ein End-Tag anzuzeigen?'),
(7, 'Wie kann man eine nummerierte Liste erstellen?'),
(8, 'Welches HTML-Element definiert den Titel eines Dokuments?'),
(9, 'Was kann man mit HTML machen?'),
(10, 'Was sind die sogenannten Meta-Befehle?\r\n\r\n'),
(11, 'Wie nennt man die HTML-Befehle?\r\n'),
(12, 'Welches Tag wird verwendet, um einen Hyperlink zu erstellen?');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `auswahlmöglichkeiten`
--
ALTER TABLE `auswahlmöglichkeiten`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `fragen`
--
ALTER TABLE `fragen`
  ADD PRIMARY KEY (`fragen_nummer`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `auswahlmöglichkeiten`
--
ALTER TABLE `auswahlmöglichkeiten`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
