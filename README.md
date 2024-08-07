# Environment Variables

- Create a _.env_ file in root dir - for the contents contact higher management.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# SCHEMA

```sql
-- Adminer 4.8.1 MySQL 8.0.37-0ubuntu0.22.04.3 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` longtext NOT NULL,
  `password` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


SET NAMES utf8mb4;

DROP TABLE IF EXISTS `payout_setting`;
CREATE TABLE `payout_setting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner_id` int NOT NULL,
  `amt` int NOT NULL,
  `status` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `proof` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `r_date` datetime NOT NULL,
  `r_type` enum('UPI','BANK Transfer','Paypal') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `acc_number` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `bank_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `acc_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `ifsc_code` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `upi_id` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `paypal_id` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `tbl_artist`;
CREATE TABLE `tbl_artist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eid` int NOT NULL,
  `sponsore_id` int NOT NULL,
  `img` text NOT NULL,
  `title` text NOT NULL,
  `arole` text NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `tbl_category`;
CREATE TABLE `tbl_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `img` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `status` int NOT NULL,
  `cover` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_cities`;
CREATE TABLE `tbl_cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lat` varchar(150) NOT NULL,
  `lang` varchar(150) NOT NULL,
  `country_id` int NOT NULL,
  `is_popular` tinyint(1) NOT NULL DEFAULT '0',
  `icon` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_countries`;
CREATE TABLE `tbl_countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(20) NOT NULL,
  `icon` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_coupon`;
CREATE TABLE `tbl_coupon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sponsore_id` int NOT NULL,
  `coupon_img` text NOT NULL,
  `title` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `coupon_code` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `subtitle` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `expire_date` date NOT NULL,
  `min_amt` float NOT NULL,
  `coupon_val` float NOT NULL,
  `description` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_cover`;
CREATE TABLE `tbl_cover` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eid` int NOT NULL,
  `sponsore_id` int NOT NULL,
  `img` text NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_etom`;
CREATE TABLE `tbl_etom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `tbl_event`;
CREATE TABLE `tbl_event` (
  `city_id` int NOT NULL,
  `country_id` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `cid` int NOT NULL,
  `sponsore_id` int NOT NULL,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` text NOT NULL,
  `cover_img` text NOT NULL,
  `sdate` date NOT NULL,
  `stime` varchar(100) NOT NULL,
  `etime` varchar(100) NOT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` int NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `disclaimer` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `latitude` text,
  `longtitude` text,
  `event_status` enum('Pending','Completed','Cancelled') NOT NULL DEFAULT 'Pending',
  `place_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `facility_id` text,
  `restict_id` text,
  `tags` text,
  `vurls` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_facility`;
CREATE TABLE `tbl_facility` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_faq`;
CREATE TABLE `tbl_faq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `store_id` int NOT NULL DEFAULT '0',
  `question` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `answer` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_fav`;
CREATE TABLE `tbl_fav` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `eid` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `tbl_gallery`;
CREATE TABLE `tbl_gallery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eid` int NOT NULL,
  `sponsore_id` int NOT NULL,
  `img` text NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_notification`;
CREATE TABLE `tbl_notification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `datetime` datetime NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_page`;
CREATE TABLE `tbl_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `status` int NOT NULL,
  `description` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_payment_list`;
CREATE TABLE `tbl_payment_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `img` text NOT NULL,
  `attributes` text NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `subtitle` text NOT NULL,
  `p_show` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_restriction`;
CREATE TABLE `tbl_restriction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `img` text NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `tbl_search_logs`;
CREATE TABLE `tbl_search_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `u_id` int DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `search_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_setting`;
CREATE TABLE `tbl_setting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `webname` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `weblogo` text NOT NULL,
  `timezone` text NOT NULL,
  `currency` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `pstore` int NOT NULL,
  `one_key` text NOT NULL,
  `one_hash` text NOT NULL,
  `s_key` text NOT NULL,
  `s_hash` text NOT NULL,
  `scredit` int NOT NULL,
  `rcredit` int NOT NULL,
  `show_dark` int NOT NULL,
  `tax` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_snotification`;
CREATE TABLE `tbl_snotification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orag_id` int NOT NULL,
  `datetime` datetime NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `tbl_sponsore`;
CREATE TABLE `tbl_sponsore` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` text NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `mobile` text NOT NULL,
  `email` text NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `commission` int NOT NULL DEFAULT '0',
  `is_verify` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_ticket`;
CREATE TABLE `tbl_ticket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `eid` int NOT NULL,
  `uniq_id` text NOT NULL,
  `sponsore_id` int NOT NULL,
  `typeid` int NOT NULL,
  `type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` float NOT NULL,
  `subtotal` float NOT NULL,
  `cou_amt` float NOT NULL,
  `total_ticket` int NOT NULL,
  `total_amt` float NOT NULL,
  `tax` float NOT NULL,
  `wall_amt` float NOT NULL,
  `p_method_id` int NOT NULL,
  `transaction_id` text NOT NULL,
  `ticket_type` enum('Booked','Cancelled','Completed') DEFAULT 'Booked',
  `cancle_comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `total_star` int NOT NULL DEFAULT '0',
  `review_comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `is_review` int NOT NULL DEFAULT '0',
  `commission` int NOT NULL,
  `book_time` datetime NOT NULL,
  `is_verify` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_type_price`;
CREATE TABLE `tbl_type_price` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int NOT NULL,
  `sponsore_id` int NOT NULL,
  `type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` float NOT NULL,
  `tlimit` int NOT NULL,
  `status` int NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ccode` text,
  `mobile` text,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `refercode` int DEFAULT NULL,
  `parentcode` int DEFAULT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int NOT NULL DEFAULT '1',
  `pro_pic` text,
  `wallet` int NOT NULL DEFAULT '0',
  `city_id` int NOT NULL DEFAULT '0',
  `is_google_login` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `wallet_report`;
CREATE TABLE `wallet_report` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `message` text NOT NULL,
  `status` text NOT NULL,
  `amt` int NOT NULL,
  `tdate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- 2024-07-17 13:44:46

```
