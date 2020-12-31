-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2020-12-09 17:00:49
-- 服务器版本： 10.1.37-MariaDB
-- PHP 版本： 7.1.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `library`
--

-- --------------------------------------------------------

--
-- 表的结构 `furni`
--

CREATE TABLE `furni` (
  `ID` int(16) NOT NULL,
  `storeID` int(16) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `size` text NOT NULL,
  `structure` varchar(500) NOT NULL,
  `img` varchar(255) NOT NULL,
  `info` text NOT NULL,
  `s_info` text CHARACTER SET utf8mb4 NOT NULL,
  `st_info` text CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `furni`
--

INSERT INTO `furni` (`ID`, `storeID`, `name`, `type`, `size`, `structure`, `img`, `info`, `s_info`, `st_info`) VALUES
(1, 0, '明代圈椅', '椅具', 'https://p1.ssl.qhimg.com/t01c5901fcebb590c48.jpg', 'http://collection.sinaimg.cn/jjhm/yjzx/20140418/U5566P1081T2D149513F8DT20140418174415.jpg', 'http://www.lubanyuan.cn/d/file/news/sheji/2019/03-11/0eca1b781cd3022ff8d00a813e6269a1.jpg', '圈椅起源于唐代，唐代时期经济空前繁华，上流阶层青睐靠背舒适、器型优美和装饰华丽的家具，圈椅的雏形就此出现。到了宋朝，圈椅风格走向款式简洁与装饰隽秀，其搭脑与扶手一顺而下，谦恭内敛，椅圈和座面呈现天圆地方。', '圈椅最明显的特征是圈背连着扶手，从高到低一顺而下；座靠时可使人的臂膀都倚着圈形的扶手，感到十分舒适，颇受人们喜爱。造型圆婉优美，体态丰满劲健，是我们民族独具特色的椅子样式之一。', '圈椅的椅圈因是弧形，所以用圆材较为协调。圈椅大多采用光素手法，只在背板正中浮雕一组简单的纹饰或透空。背板都做成“S”或“C”形曲线，是根据人体脊椎骨的曲线制成的，为明式家具科学性的一个典型例证。'),
(2, 2, '紫檀木雕荷花纹宝座', '椅具', '就是个椅子的介绍2', '', 'https://img.dpm.org.cn/Uploads/Picture/dc/1691[1024].jpg', '通高109厘米，宽98厘米，纵78厘米。宝座通体紫檀木质。座面方中带圆，素面。座面以下束腰，鼓腿膨牙，带托泥。靠背、扶手做成七屏式，活榫安装。宝座整体满饰荷花、荷叶纹，靠背搭脑处以宽厚横木雕成一柄荷叶形，雕工光滑圆润。\r\n　　宝座取材厚重，木质精美，造型圆浑，舒适耐用。宝座上的荷花、叶、梗、藕皆以自然形态布满整体，颇类元明时期雕漆花卉器物上的雕刻手法，在传世的明代家具中仅此一件。', '宝座取材厚重，木质精美，造型圆浑，舒适耐用。宝座上的荷花、叶、梗、藕皆以自然形态布满整体，颇类元明时期雕漆花卉器物上的雕刻手法，在传世的明代家具中仅此一件。', ''),
(3, 0, '黄花梨木翘头案', '桌子', '', '', 'https://img.dpm.org.cn/Uploads/Picture/dc/19054[1024].jpg', '黄花梨翘头案，明，高81.5厘米，长244厘米，宽46厘米。\r\n　　翘头案黄花梨木质。案面两端带小翘头，面下牙条、牙头与腿采用夹头榫结构，两侧牙头与当中牙条一木联作，牙头锼出卷云纹。边缘起阳线，腿面饰双混面双边线。两侧腿间镶档板，壸门式开光，当中透雕两面作双螭纹。足下装垫木托泥。案腿向两侧叉出较大，明式风格特点明显。此案形体长大，是传世黄花梨家具中罕见的大器。', '', ''),
(4, 0, 'gfhgjh', '椅具', '', '', 'rgthygjhjk', 'rthfyjukil;', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `manager`
--

CREATE TABLE `manager` (
  `ID` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `passwd` varchar(20) NOT NULL,
  `permission` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `manager`
--

INSERT INTO `manager` (`ID`, `name`, `username`, `passwd`, `permission`) VALUES
(1, 'hiko', 'hiko', '385401', 'ALLPOWER'),
(2, 'test', 'test', 'wedhgfgjytrwefsdbcv', 'ALLPOWER'),
(3, 'newM', 'newM', 'sdadfsgfsg', 'WRITEONLY'),
(4, 'newMB', 'newMB', 'dsfvbgdg', 'READONLY'),
(5, 'newMA', 'newMA', 'sdgdshfgfdf', 'READONLY');

-- --------------------------------------------------------

--
-- 表的结构 `m_furni`
--

CREATE TABLE `m_furni` (
  `manager` int(16) NOT NULL,
  `furni` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `m_part`
--

CREATE TABLE `m_part` (
  `manager` int(16) NOT NULL,
  `part` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `m_store`
--

CREATE TABLE `m_store` (
  `manager` int(16) NOT NULL,
  `storehouse` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `part`
--

CREATE TABLE `part` (
  `ID` int(16) NOT NULL,
  `storeID` int(16) NOT NULL,
  `name` varchar(20) NOT NULL,
  `img` varchar(255) NOT NULL,
  `info` text NOT NULL,
  `size` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `reader`
--

CREATE TABLE `reader` (
  `ID` int(16) NOT NULL,
  `name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `passwd` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `reader`
--

INSERT INTO `reader` (`ID`, `name`, `username`, `passwd`) VALUES
(1, 'hiko', 'hiko', '385401'),
(2, 'dsad', 'dsad', 'dasdsada'),
(3, 'test09', 'test09', '4567867654433'),
(4, 'test', 'test', '3454642563'),
(5, 'tesd', 'tesd', 'csadsfghfgmj'),
(6, 'sadsad', 'sadsad', 'rgfdvcdsascds'),
(7, 'guozong', 'guozong', '23144564578790'),
(8, 'hjkjk', 'hjkjk', 'fsdagfhgsfhgf');

-- --------------------------------------------------------

--
-- 表的结构 `star`
--

CREATE TABLE `star` (
  `reader` int(16) NOT NULL,
  `type` tinyint(1) NOT NULL,
  `item` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `storehouse`
--

CREATE TABLE `storehouse` (
  `ID` int(16) NOT NULL,
  `name` varchar(20) NOT NULL,
  `info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转储表的索引
--

--
-- 表的索引 `furni`
--
ALTER TABLE `furni`
  ADD PRIMARY KEY (`ID`);

--
-- 表的索引 `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`ID`);

--
-- 表的索引 `m_furni`
--
ALTER TABLE `m_furni`
  ADD PRIMARY KEY (`manager`,`furni`);

--
-- 表的索引 `m_part`
--
ALTER TABLE `m_part`
  ADD PRIMARY KEY (`manager`,`part`);

--
-- 表的索引 `m_store`
--
ALTER TABLE `m_store`
  ADD PRIMARY KEY (`manager`,`storehouse`);

--
-- 表的索引 `part`
--
ALTER TABLE `part`
  ADD PRIMARY KEY (`ID`);

--
-- 表的索引 `reader`
--
ALTER TABLE `reader`
  ADD PRIMARY KEY (`ID`);

--
-- 表的索引 `star`
--
ALTER TABLE `star`
  ADD PRIMARY KEY (`reader`,`item`);

--
-- 表的索引 `storehouse`
--
ALTER TABLE `storehouse`
  ADD PRIMARY KEY (`ID`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `furni`
--
ALTER TABLE `furni`
  MODIFY `ID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `manager`
--
ALTER TABLE `manager`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `part`
--
ALTER TABLE `part`
  MODIFY `ID` int(16) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `reader`
--
ALTER TABLE `reader`
  MODIFY `ID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `storehouse`
--
ALTER TABLE `storehouse`
  MODIFY `ID` int(16) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
