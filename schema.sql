DROP DATABASE IF EXISTS gallery;
CREATE DATABASE gallery;

USE gallery;


-- DROP TABLE IF EXISTS `Users`;
		
-- CREATE TABLE `Products` (
--   `id` INTEGER AUTO_INCREMENT,
--   `name` VARCHAR(100) NOT NULL DEFAULT 'NULL',
--   PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `Images` (
--   `id` INTEGER AUTO_INCREMENT,
--   `img_small` VARCHAR(100) NOT NULL DEFAULT 'NULL',
--   `img_large` VARCHAR(100) NOT NULL DEFAULT 'NULL',
--   `img_zoom` VARCHAR(100) NOT NULL DEFAULT 'NULL',
--   `product_id` INTEGER NOT NULL REFERENCES Products(`id`),
--   PRIMARY KEY (`id`)
-- );