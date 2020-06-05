.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../../Includes.txt


.. _upgrades_4000000_remove:


Remove deprecated templates
===========================

Find templates, which contains a configuration for SEO Dynamic Tag:

.. code:: sql

	SELECT uid, pid, title, constants FROM `sys_template` WHERE title LIKE "%seodynamictag%" 

	SELECT uid, pid, title, constants FROM `sys_template` WHERE title LIKE "%seodynamictag%" AND constants LIKE "%plugin.tx_seodynamictag {%" 

	SELECT uid, pid, title, constants FROM `sys_template` WHERE constants LIKE "%plugin.tx_seodynamictag {%" 


Delete
------

.. code:: sql

	DELETE FROM `sys_template` WHERE title LIKE "%seodynamictag%" AND constants LIKE "%plugin.tx_seodynamictag {%" 





