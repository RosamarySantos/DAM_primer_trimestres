use strict;
use warnings;
use 5.010;
say "PID del proceso padre: $$";
my $pid = fork();
die if not defined $pid;
say "PID del proceso hijo: $$ ($pid)";
