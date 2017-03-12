SELECT *
FROM tx_org_repertoire
JOIN tx_org_mm_all ON tx_org_mm_all.uid_foreign = tx_org_repertoire.uid
WHERE tx_org_repertoire.pid
IN ( 224 )
AND tx_org_mm_all.uid_local =15
AND tx_org_mm_all.table_local = 'tx_org_cal'
AND tx_org_mm_all.table_foreign = 'tx_org_repertoire'
AND tx_org_repertoire.deleted =0
AND tx_org_repertoire.hidden =0
AND (
tx_org_repertoire.fe_group = ''
OR tx_org_repertoire.fe_group IS NULL
OR tx_org_repertoire.fe_group = '0'
OR FIND_IN_SET( '0', tx_org_repertoire.fe_group )
OR FIND_IN_SET( '-1', tx_org_repertoire.fe_group )
)
LIMIT 0 , 30

SELECT *
FROM tx_org_mm_all
WHERE tx_org_mm_all.uid_local =15
AND tx_org_mm_all.table_local = 'tx_org_cal'
AND tx_org_mm_all.table_foreign = 'tx_org_repertoire'
LIMIT 0 , 30
