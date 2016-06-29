.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _developer-setup:

Setup
=====

Constants
---------

Please configure constants with the TYPO3 User Interface, the :ref:`Constant Editor <integrator-configuration-constanteditor>`, only!

But if there is any need to configure constants directly you find all constants editable at

::

  plugin.tx_seodynamictag {
    canonical ...
    ...
  }


Setup
-----

Please configure the setup by the TYPO3 User Interface, the :ref:`Constant Editor <integrator-configuration-constanteditor>`, only!

But if there is any need to adapt SEO Dynamic Tag to your needs, you find all properties at

::

  plugin.tx_seodynamictag_pi1 {
    page =
    page {
      headerData {
        49442 = COA
        49442 {
            // line feed
          10 = TEXT
          ...
            // title
          20 = COA
          20 {
            ...
            wrap = <title>|</title>
          }
            // line feed
          30 = TEXT
            ...
            // canonical tag
          40 = COA
          40 {
            if {
              isTrue = {$plugin.tx_seodynamictag.canonical.enabled}
            }
            10 = TEXT
            10 {
              ...
              wrap = <link rel="canonical" href="|"/>
            }
          }
        }
      }
      meta =
      meta {
        author = {$plugin.tx_seodynamictag.default.author}
        author {
          ...
        }
        description = {$plugin.tx_seodynamictag.default.description}
        description {
          ...
        }
        keywords = {$plugin.tx_seodynamictag.keywords.default}
        keywords {
          ...
        }
      }
    }
  }