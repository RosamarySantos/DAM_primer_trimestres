drop procedure if exists insert_update;

delimiter //
create procedure insert_update (tituloLibro varchar(100), autorLibro varchar(50), precioLibro double)
begin
  if not exists (select l.titulo from libros as l where l.titulo = tituloLibro)
    then
	insert into libros (titulo, autor, precio) values (tituloLibro, autorLibro, precioLibro);
	select "201" as code;
  else
	update libros set autor = autorLibro, precio = precioLibro where titulo = tituloLibro;
	select "200" as code;
  end if;
	
end
//

delimiter ;
