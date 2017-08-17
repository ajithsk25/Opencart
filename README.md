**Installation**

1. Upload all of the files and folders to your server from the "Upload" folder, place them in your web root. The web root is different on some servers, cPanel it should be public_html/ and on Plesk it should be httpdocs/.

2. Rename config-dist.php to config.php and admin/config-dist.php to admin/config.php

3. For Linux/Unix make sure the following folders and files are writable.

		chmod 0755 or 0777 system/storage/cache/
		chmod 0755 or 0777 system/storage/download/
		chmod 0755 or 0777 system/storage/logs/
		chmod 0755 or 0777 system/storage/modification/
		chmod 0755 or 0777 system/storage/session/
		chmod 0755 or 0777 system/storage/upload/
		chmod 0755 or 0777 system/storage/vendor/
		chmod 0755 or 0777 image/
		chmod 0755 or 0777 image/cache/
		chmod 0755 or 0777 image/catalog/
		chmod 0755 or 0777 config.php
		chmod 0755 or 0777 admin/config.php

		If 0755 does not work try 0777.

4. Make sure you have installed a MySQL Database which has a user assigned to it
	DO NOT USE YOUR ROOT USERNAME AND ROOT PASSWORD

5. Visit the store homepage e.g. http://www.example.com or http://www.example.com/store/

6. You should be taken to the installer page. Follow the on screen instructions.

7. After successful install, delete the /install/ directory from ftp.

8. If you have downloaded the compiled version with a folder called "vendor" - this should be uploaded above the webroot (so the same folder where the public_html or httpdocs is)
