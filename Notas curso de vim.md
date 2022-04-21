## 4. Yank and put, relative Numbers

+ `$` o `<Fin>`: fin de linea.
+ `0` o `<Inicio>`: comienzo de linea.
+ `gg` o `<Ctrl>+<Inicio>`: ir principio del documento.
+ `G` o `<Ctrl>+<Fin>`: ir final del documento.
+ `ZZ` o `:x`: salir guardando los cambios.
+ `ZQ` o `:q!`: salir sin guardar cambios.
+ `yy`: copia una linea.
+ `p`: pegar linea copiada debajo de la actual.
+ `P`: pegar linea copiada arriba de la actual. 
+ `u`: deshacer último cambio. 
+ `dd`: corta linea actual.
+ `3Y`: copia linea actual y dos abajo de ella.
+ `:set relativenumber` o `:set rnu`: activa números relativos, útil para cortar/copiar lineas sin tener que contarlas.
+ `:set norelativenumber` o `:set nornu`: desactiva los números relativos.

## 5. D and Words

+ `D`: corta línea **a partir de la posición cursor**.
+ `C`: corta a partir de posición del cursor e ingresa en modo edición, shortcut para `Di`. 
+ `Y`: copia linea actual **independientemente de la posición del cursor**.
+ `A`: agregar (append) texto al final de linea.
+ `a`: agrega texto _después_ del cursor.
+ `i`: agrega texto _antes_ del cursor.
+ `w`: avanza una palabra.
+ `2w`: avanza dos palabras.
+ `b`: retrocede una palabra.
+ `dw`: elimina palabra.
+ `d2w`: elimina dos palabras y el espacio que le sigue. 
+ `e`: avanza al final de una palabra.
+ `ge`: retrocede al final de una palabra.
+ `W`: avanza hasta la siguiente palabra, ignorando caracteres especiales.
+ `B`: retrocede una palabra, ignorando caracteres especiales.

## 6. Indent and Repeat