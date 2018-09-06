function calc

year=1979
yearend=2017

while (year<=yearend)

'sdfopen erai_sst_12hr_dec_'year'.nc'
'sdfopen erai_ps_12hr_dec_'year'.nc'
'sdfopen erai_ta850_12hr_dec_'year'.nc'

'set x 1 148'
'set y 1 49'
'set t 1 62'

'ptsurf=sst.1*pow(100000/sp.2,0.286)'
'pt850=t.3*pow(100/85,0.286)'
'mco=maskout(ptsurf-pt850,sst.1-271.5)'

'define mcao=mco'
'set sdfwrite -flt erai_mcao_12hr_dec_'year'.nc'
'sdfwrite mcao'

year=year+1
say year

'reinit'

endwhile

return
