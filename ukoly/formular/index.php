<?php
$data = [
];


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $errors = [];

    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $surname = htmlspecialchars(trim($_POST['surname'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $address = htmlspecialchars(trim($_POST['address'] ?? ''));
    $city = htmlspecialchars(trim($_POST['city'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if (!$name) $errors[] = "Jméno je povinné.";
    if (!$surname) $errors[] = "Příjmení je povinné.";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Neplatná emailová adresa.";
    if (!preg_match('/^\d{9}$/', $phone)) $errors[] = "Telefonní číslo musí mít 9 číslic.";
    if (!preg_match('/\d+/', $address)) $errors[] = "Adresa musí obsahovat číslo domu.";
    if (!$city) $errors[] = "Město je povinné.";
    if (strlen($message) > 255) $errors[] = "Zpráva může mít maximálně 255 znaků.";

    if (empty($errors)) {
        $data[] = [
            'name' => $name,
            'surname' => $surname,
            'email' => $email,
            'phone' => $phone,
            'address' => $address,
            'city' => $city,
            'message' => $message
        ];

    } else {
        
    }
}
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulář</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="alert.css">
</head>
<body>
    <div class="container">
        <form id="myForm" action="" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="<?= $_POST['name'] ?? '' ?>" required>
            <img id="nameValidation" class="validation-icon" src="neutral.png" alt="validation"><br><br>

            <label for="surname">Surname:</label>
            <input type="text" id="surname" name="surname" value="<?= $_POST['surname'] ?? '' ?>" required>
            <img id="surnameValidation" class="validation-icon" src="neutral.png" alt="validation"><br><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="<?= $_POST['email'] ?? '' ?>" required>
            <img id="emailValidation" class="validation-icon" src="neutral.png" alt="validation"><br><br>

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value="<?= $_POST['phone'] ?? '' ?>" required>
            <img id="phoneValidation" class="validation-icon" src="neutral.png" alt="validation"><br><br>

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" value="<?= $_POST['address'] ?? '' ?>" required>
            <img id="addressValidation" class="validation-icon" src="neutral.png" alt="validation"><br><br>

            <label for="city">City:</label>
            <input type="text" id="city" name="city" value="<?= $_POST['city'] ?? '' ?>" required>
            <img id="cityValidation" class="validation-icon" src="neutral.png" alt="validation"><br><br>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required><?= $_POST['message'] ?? '' ?></textarea>
            <img id="messageValidation" class="validation-icon" src="neutral.png" alt="validation"><br><br>

            <input type="submit" value="submit">
        </form>
        <div class="alert"></div>
    </div>



    <table>
        <tr>
            <th>Jméno</th>
            <th>Příjmení</th>
            <th>Email</th>
            <th>Telefonní číslo</th>
            <th>Adresa</th>
            <th>Město</th>
            <th>Zpráva</th>
        </tr>
        <?php
            if (is_array($data) && !empty($data)) {
                foreach ($data as $vypsani): ?>
                    <tr>
                        <td><?= htmlspecialchars($vypsani['name']); ?></td>
                        <td><?= htmlspecialchars($vypsani['surname']); ?></td>
                        <td><?= htmlspecialchars($vypsani['email']); ?></td>
                        <td><?= htmlspecialchars($vypsani['phone']); ?></td>
                        <td><?= htmlspecialchars($vypsani['address']); ?></td>
                        <td><?= htmlspecialchars($vypsani['city']); ?></td>
                        <td><?= htmlspecialchars($vypsani['message']); ?></td>
                    </tr>
                <?php endforeach;
            } else { ?>
                <tr>
                    <td style="text-align: center; color: red;">Žádná data k zobrazení</td>
                </tr>
            <?php } ?>
    </table>

    <div class="alert">
        
    </div>


    <script src="script.js"></script>
</body>
</html>
