.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _developer_setup:


Setup
=====


Snippet 1 – your extension
--------------------------

This is an example with your extension.

Let's assume:

You extension uses URL paramter for the single view like:

* tx_myextension_pi1[showUid]=123&tx_myextension_pi1[action]=single&tx_myextension_pi1[controller]=main

The data is stored in the table:

* tx_myextension_items

Than the code from below will correspond with the given URL paramaters and the table:

.. code-block:: typoscript

  plugin.tx_seodynamictag {
    setup {
      plugins {
        tx_myextension_pi1 {
            // csvList of the plugin parameters
          additionalParams = action, controller
            // mapping of showUids
          showUids {
            showUid = tx_myextension_items
          }
        }
      }
    }
  }


Caution
'''''''

**You can't paste the code from above directly into the setup of a TypoSript record.**

**You MUST create an include static template by your extension like:**

* My Extension +SEO Dynamic Tag

You have to include your template above of the template of SEO Dynamic Tag like in the example:

* ... (some templates)

* My Extension +SEO Dynamic Tag

* SEO [01] – MUST PLACED BELOW OF ALL OTHER TEMPLATES

Sorry for this restriction.



Snippet 2 – xBlog-example
-------------------------

This is an example with the extension xBlog.

In the case below xBlog is using up to ten tables of the extension Organiser.
Each table has its own showUid.

xBlog uses URL paramter for the single view like:

* tx_xblog_pi1[newsUid]=7&tx_xblog_pi1[action]=single&tx_xblog_pi1[controller]=Main

* tx_xblog_pi1[newsUid]=7&tx_xblog_pi1[action]=single&tx_xblog_pi1[controller]=Main&tx_xblog_pi1[plugin]=31148

The code from below corresponds with the given URL paramaters and the used tables:

.. code-block:: typoscript

  plugin.tx_seodynamictag {
    setup {
      plugins {
        tx_xblog_pi1 {
            // csvList of the plugin parameters
          additionalParams = action, controller, plugin
            // mapping of showUids
          showUids {
            calUid        = tx_org_cal
            eventUid      = tx_org_event
            jobUid        = tx_org_job
            locationUid   = tx_org_location
            newsUid       = tx_org_news
            organiserUid  = tx_org_headquarters
            repertoireUid = tx_org_repertoire
            serviceUid    = tx_org_service
            showUid       = tx_org_news
            staffUid      = tx_org_staff
          }
        }
      }
    }
  }
