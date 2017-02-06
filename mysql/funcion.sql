drop function if exists precioLibro;

delimiter $$
create function precioLibro(idLibro int) returns double
begin
  declare precioFinal double;
  select precio into precioFinal from libros where id = idLibro;
  return precioFinal * 1.21;
end
$$

delimiter ;
