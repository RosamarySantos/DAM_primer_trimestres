#include <stdio.h>
int main() {
	int pid;
	printf("PADRE: Soy el proceso padre y mi pid es: %d\n", getpid());
	pid = fork();
	// En cuanto llamamos a fork se crea un nuevo proceso. En el proceso
	// padre 'pid' contendra el pid del proceso hijo. En el proceso hijo
	// 'pid' valdra 0. Eso es lo que usamos para distinguir si el codigo
	//  que se esta ejecutando pertenece al padre o al hijo.
	if (pid) // Este es el proceso padre
	{
		printf("PADRE: Soy el proceso padre y mi pid sigue siendo: %d\n", getpid());
		printf("PADRE: Mi hijo tiene el pid: %d\n", pid);
}
	else // Proceso hijo
	{
		printf("HIJO: Soy el proceso hijo y mi pid es: %d\n", getpid());
	printf("HIJO: mi padre tiene el pid: %d\n", getppid());
	}
}
