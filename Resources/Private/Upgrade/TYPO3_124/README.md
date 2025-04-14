The files

* fractor.php
* rector.php

must be used in the root directory


```
$ branch/src$ vendor/bin/rector-p extensions/seo_dynamic_tag/ # ./rector.php must exist
$ branch/src$ ddev exec vendor/bin/fractor process -c ./extensions/seo_dynamic_tag/fractor.php --dry-run | tee ~/workspace/tempnobackup/logs/250414_seodynamictag_fractor.txt
```