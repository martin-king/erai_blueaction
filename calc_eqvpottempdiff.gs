function calc

year=1979
yearend=2018

while (year<=yearend)

'sdfopen erai_sst_12hr_mar_'year'.nc'
'sdfopen erai_ps_12hr_mar_'year'.nc'
'sdfopen erai_tdewsurf_12hr_mar_'year'.nc'
*
'sdfopen erai_ta850_12hr_mar_'year'.nc'
'sdfopen erai_hus850_12hr_mar_'year'.nc'

'set x 1 148'
'set y 1 49'
'set t 1 62'

'var1=17.503*(d2m.3-273.16)/(d2m.3-32.19)'
'estdew=611.21*pow(2.7818,var1)'
'wsurf=0.622*estdew/sp.2'

'eqptsurf=(sst.1+2400/1.004*wsurf)*pow(100000/sp.2,0.286)'
'eqpt850=(t.4+2400/1.004*q.5)*pow(100/85,0.286)'
'mco=maskout(eqptsurf-eqpt850,sst.1-271.5)'

'define mmcao=mco'
'set sdfwrite -flt erai_moistmcao_12hr_mar_'year'.nc'
'sdfwrite mmcao'

year=year+1
say year

'reinit'

endwhile

return
