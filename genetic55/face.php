<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<style>
</style>
</head>
<body>
	<table width="100%"  cellpadding="5" border="1">
		<tr>
			<td colspan="2"><h2> Многопараметрическая оптимизация при помощи генетического алгоритма </h3></td>
		</tr>
		<tr>
			<td width="50%"> Функуция 1 - резмер зерна металла </br>
			<img src="form1.png" align="center">
			
			</td>
			<td> Функуция 2 - производительность </br>
			<img src="form2.png" align="center">
			</td>
		</tr>
		<tr>
			<td colspan="2">Где s - подача; v - скорость резания; L - длина заготовки; d - диаметр заготовки; D0 - исходный резмер зерна; A - показатель свойств материала</td>
		</tr>
		<tr>
			<!--td colspan="2">
				<table width="80%"  border="2">
					<tr>
						<td> </td>
						<td> L, м</td>
						<td> d, м</td>
						<td> D0, м</td>
						<td> s, м</td>
						<td> v, м</td>
					</tr>
					<tr>
						<td> min </td>
						<td> 0.1</td>
						<td> 0.01</td>
						<td> 0.2E-7</td>
						<td> 1E-5</td>
						<td> 2.5</td>
					</tr>
					<tr>
						<td> max </td>
						<td> 0.5</td>
						<td> 0.1</td>
						<td> 2.5E-7</td>
						<td> 10.23E-3</td>
						<td> 100</td>
					</tr>
				</table-->				
			</td>
		</tr>
		<tr>
			<td> Введите начальные параметры для генетического алгоритма:</br>
				<form method="post" action="index.php" name="data" id="data"> 
					<b> Точность результата по каждой переменной до q знака после запятой:</b> </br> 
						<label for="qs"> s:</label><input type="text" name="qs" value="5" id="qs"> </br>
						<label for="qv"> v:</label><input type="text" name="qv" value="1" id="qv"> </br>
						<label for="ql"> L:</label><input type="text" name="ql" value="4" id="ql"> </br>
						<label for="qd"> d:</label><input type="text" name="qd" value="4" id="qd"> </br>
						<label for="qd0">D0:</label><input type="text" name="qd0" value="10" id="qd0"><br>  		
						<b> Размер популяции:</b></br>
						<label for="popsize">Особей:</label><input type="text" name="popsize" value="1000" id="popsize"><br>
						<input type="submit" name="start" id="start" value="Start">  
					</form> 			
			</td>
			<td>Результаты вычислений:</td>
		</tr>
		
	</table>