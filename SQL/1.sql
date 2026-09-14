    CREATE TABLE `category` (
        id INT(11) PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255)
    ) ENGINE=InnoDB;

    CREATE TABLE `user` (
        id INT(11) PRIMARY KEY AUTO_INCREMENT,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        `rank` TINYINT(4) NOT NULL DEFAULT 0,
        is_active TINYINT(1) NOT NULL DEFAULT 1,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE `comment` (
        id INT(11) PRIMARY KEY AUTO_INCREMENT,
        target_table VARCHAR(20) NOT NULL,
        target_id INT(11) NOT NULL,
        user_id INT(11) NOT NULL,
        `comment` TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES `user`(id)
            ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB;

    CREATE TABLE `blog` (
        id INT PRIMARY KEY AUTO_INCREMENT,
        category_id INT(11) NOT NULL,
        user_id INT(11) NOT NULL,
        title VARCHAR(255) NOT NULL,
        `view` INT(11) NOT NULL DEFAULT 0,
        is_active TINYINT(1) NOT NULL DEFAULT 1,
        content TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (category_id) REFERENCES `category`(id)
            ON DELETE RESTRICT ON UPDATE CASCADE,
        FOREIGN KEY (user_id) REFERENCES `user`(id)
            ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB;

    CREATE TABLE `news` (
        id INT(11) PRIMARY KEY AUTO_INCREMENT,
        category_id INT(11) NOT NULL,
        title VARCHAR(255) NOT NULL,
        `view` INT(11) NOT NULL DEFAULT 0,
        is_active TINYINT(1) NOT NULL DEFAULT 1,
        content TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (category_id) REFERENCES `category`(id)
            ON DELETE RESTRICT ON UPDATE CASCADE
    ) ENGINE=InnoDB;

    CREATE TABLE `follow` (
        id INT(11) PRIMARY KEY AUTO_INCREMENT,
        from_user_id INT(11) NOT NULL,
        to_user_id INT(11) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (from_user_id) REFERENCES `user`(id)
            ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (to_user_id) REFERENCES `user`(id)
            ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB;