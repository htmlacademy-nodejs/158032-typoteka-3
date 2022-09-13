
      INSERT INTO users("email", "passwordHash", "firstName", "lastName", "avatar") VALUES
      ('user1@example.com', '5f4dcc3b5aa765d61d8327deb882cf99', 'User1FirstName', 'User1LastName', 'user1Avatar.jpg'),
('user2@example.com', '5f4dcc3b5aa765d62d8327deb882cf99', 'User2FirstName', 'User2LastName', 'user2Avatar.jpg');
      INSERT INTO categories("name") VALUES
      ('Science'),
('Politics'),
('Culture'),
('Sports'),
('Nature'),
('Books');
      ALTER TABLE articles DISABLE TRIGGER ALL;
      INSERT INTO articles("title", "userId", "announce", "fullText") VALUES
      ('7 Facts That Nobody Told You About Blog.', '2', 'That is, just because you''re worried about something doesn''t mean it''s going to happen. Rona continues his description: Descending into the ocean is sheer excitement.', 'What could go wrong? Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. We still need more time. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.'),
('Here''s What No One Tells You About Blog.', '2', 'You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. We still need more time.', 'We still need more time. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. So one of the things I did was explain [in the interview] why I was asking.'),
('20 Wonderful Blog. Number 16 is Absolutely Stunning', '2', 'Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. Rona continues his description: Descending into the ocean is sheer excitement.', 'You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. So one of the things I did was explain [in the interview] why I was asking. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. What could go wrong? We still need more time.'),
('20 Wonderful Blog. Number 16 is Absolutely Stunning', '2', 'We still need more time. That is, just because you''re worried about something doesn''t mean it''s going to happen.', 'What could go wrong? This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. So one of the things I did was explain [in the interview] why I was asking.'),
('Here''s What No One Tells You About Blog.', '1', 'This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.', 'That is, just because you''re worried about something doesn''t mean it''s going to happen. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. Rona continues his description: Descending into the ocean is sheer excitement. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. What could go wrong? Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend.'),
('Here''s What No One Tells You About Blog.', '2', 'You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. Rona continues his description: Descending into the ocean is sheer excitement.', 'So one of the things I did was explain [in the interview] why I was asking. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. Rona continues his description: Descending into the ocean is sheer excitement. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. We still need more time. And West Virginians are angry, right? That is, just because you''re worried about something doesn''t mean it''s going to happen. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. What could go wrong?'),
('7 Facts That Nobody Told You About Blog.', '1', 'Rona continues his description: Descending into the ocean is sheer excitement. We still need more time.', 'So one of the things I did was explain [in the interview] why I was asking. Rona continues his description: Descending into the ocean is sheer excitement.'),
('Here''s What No One Tells You About Blog.', '1', 'Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. And West Virginians are angry, right?', 'This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. So one of the things I did was explain [in the interview] why I was asking. That is, just because you''re worried about something doesn''t mean it''s going to happen. Rona continues his description: Descending into the ocean is sheer excitement.'),
('20 Wonderful Blog. Number 16 is Absolutely Stunning', '1', 'Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. So one of the things I did was explain [in the interview] why I was asking.', 'So one of the things I did was explain [in the interview] why I was asking. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. That is, just because you''re worried about something doesn''t mean it''s going to happen.'),
('7 Facts That Nobody Told You About Blog.', '1', 'We still need more time. And West Virginians are angry, right?', 'What could go wrong? That is, just because you''re worried about something doesn''t mean it''s going to happen.'),
('20 Wonderful Blog. Number 16 is Absolutely Stunning', '1', 'That is, just because you''re worried about something doesn''t mean it''s going to happen. So one of the things I did was explain [in the interview] why I was asking.', 'We still need more time. That is, just because you''re worried about something doesn''t mean it''s going to happen. So one of the things I did was explain [in the interview] why I was asking. What could go wrong? Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. And West Virginians are angry, right? Rona continues his description: Descending into the ocean is sheer excitement.'),
('20 Wonderful Blog. Number 16 is Absolutely Stunning', '2', 'And West Virginians are angry, right? Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend.', 'Rona continues his description: Descending into the ocean is sheer excitement. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. What could go wrong? This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals.'),
('7 Facts That Nobody Told You About Blog.', '1', 'You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. What could go wrong?', 'This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. What could go wrong? That is, just because you''re worried about something doesn''t mean it''s going to happen. And West Virginians are angry, right? We still need more time. Rona continues his description: Descending into the ocean is sheer excitement.'),
('Here''s What No One Tells You About Blog.', '2', 'You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. What could go wrong?', 'That is, just because you''re worried about something doesn''t mean it''s going to happen. Rona continues his description: Descending into the ocean is sheer excitement. What could go wrong? This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.'),
('7 Facts That Nobody Told You About Blog.', '2', 'So one of the things I did was explain [in the interview] why I was asking. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.', 'Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. Rona continues his description: Descending into the ocean is sheer excitement.'),
('7 Facts That Nobody Told You About Blog.', '1', 'What could go wrong? Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.', 'You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. That is, just because you''re worried about something doesn''t mean it''s going to happen. What could go wrong? This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. We still need more time. And West Virginians are angry, right? So one of the things I did was explain [in the interview] why I was asking. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. Rona continues his description: Descending into the ocean is sheer excitement.'),
('20 Wonderful Blog. Number 16 is Absolutely Stunning', '2', 'We still need more time. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray.', 'Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. We still need more time. That is, just because you''re worried about something doesn''t mean it''s going to happen. So one of the things I did was explain [in the interview] why I was asking. Rona continues his description: Descending into the ocean is sheer excitement.'),
('Here''s What No One Tells You About Blog.', '1', 'What could go wrong? So one of the things I did was explain [in the interview] why I was asking.', 'That is, just because you''re worried about something doesn''t mean it''s going to happen. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. And West Virginians are angry, right?'),
('Here''s What No One Tells You About Blog.', '1', 'So one of the things I did was explain [in the interview] why I was asking. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray.', 'That is, just because you''re worried about something doesn''t mean it''s going to happen. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. So one of the things I did was explain [in the interview] why I was asking. What could go wrong?'),
('7 Facts That Nobody Told You About Blog.', '2', 'We still need more time. What could go wrong?', 'This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. What could go wrong? And West Virginians are angry, right? That is, just because you''re worried about something doesn''t mean it''s going to happen.');
      ALTER TABLE articles ENABLE TRIGGER ALL;
      ALTER TABLE articles_categories DISABLE TRIGGER ALL;
      INSERT INTO articles_categories("articleId", "categoryId") VALUES
      (1, 5),
(2, 5),
(3, 2),
(4, 2),
(5, 3),
(6, 4),
(7, 4),
(8, 3),
(9, 5),
(10, 6),
(11, 5),
(12, 3),
(13, 4),
(14, 2),
(15, 3),
(16, 5),
(17, 4),
(18, 6),
(19, 5),
(20, 6);
      ALTER TABLE articles_categories ENABLE TRIGGER ALL;
      ALTER TABLE comments DISABLE TRIGGER ALL;
      INSERT INTO COMMENTS("text", "userId", "articleId") VALUES
      ('It''s simple not just excellent! Let me take a nap... great anyway. Looks sublime and excellent.', 1, 1),
('Really exquisite, friend. I think I''m crying. It''s that exquisite. It''s simple not just excellent!', 1, 1),
('Splendid. So sublime.', 2, 2),
('Let me take a nap... great anyway. Splendid. So sublime. I think I''m crying. It''s that exquisite.', 1, 2),
('Splendid. So sublime. I think I''m crying. It''s that exquisite. This has navigated right into my heart.', 2, 2),
('Looks sublime and excellent. Nice use of contrast in this concept mate Really exquisite, friend.', 1, 2),
('I think I''m crying. It''s that exquisite. Looks sublime and excellent. It''s simple not just excellent!', 1, 2),
('Really exquisite, friend. Splendid. So sublime.', 1, 3),
('It''s simple not just excellent! This is cool work, friend. Splendid. So sublime.', 2, 3),
('Splendid. So sublime. Let me take a nap... great anyway.', 2, 3),
('Really exquisite, friend. This is cool work, friend.', 1, 3),
('Splendid. So sublime.', 1, 3),
('This is cool work, friend.', 2, 4),
('Let me take a nap... great anyway. Really exquisite, friend. It''s simple not just excellent!', 2, 4),
('Super sublime shot =) This has navigated right into my heart. Let me take a nap... great anyway.', 1, 4),
('Looks sublime and excellent. Super sublime shot =) Nice use of contrast in this concept mate', 2, 4),
('This has navigated right into my heart.', 2, 4),
('This is cool work, friend. It''s simple not just excellent! Really exquisite, friend.', 2, 5),
('I think I''m crying. It''s that exquisite. Super sublime shot =)', 2, 6),
('Let me take a nap... great anyway.', 2, 6),
('It''s simple not just excellent!', 2, 6),
('Splendid. So sublime. It''s simple not just excellent! Let me take a nap... great anyway.', 2, 6),
('I think I''m crying. It''s that exquisite. This is cool work, friend. Super sublime shot =)', 1, 6),
('Splendid. So sublime. Really exquisite, friend.', 2, 7),
('I think I''m crying. It''s that exquisite. Nice use of contrast in this concept mate Super sublime shot =)', 1, 7),
('Super sublime shot =)', 1, 7),
('Let me take a nap... great anyway.', 2, 8),
('Splendid. So sublime. Really exquisite, friend.', 2, 8),
('It''s simple not just excellent! Looks sublime and excellent.', 1, 8),
('I think I''m crying. It''s that exquisite. Nice use of contrast in this concept mate', 2, 8),
('Splendid. So sublime.', 2, 9),
('Really exquisite, friend.', 2, 9),
('It''s simple not just excellent! Nice use of contrast in this concept mate', 2, 10),
('Really exquisite, friend. It''s simple not just excellent! This has navigated right into my heart.', 1, 10),
('This is cool work, friend. Nice use of contrast in this concept mate Really exquisite, friend.', 2, 11),
('Splendid. So sublime. Looks sublime and excellent.', 1, 11),
('Super sublime shot =)', 1, 12),
('Splendid. So sublime.', 2, 12),
('Really exquisite, friend. Super sublime shot =)', 1, 13),
('Let me take a nap... great anyway.', 2, 13),
('This is cool work, friend. Nice use of contrast in this concept mate I think I''m crying. It''s that exquisite.', 2, 13),
('Nice use of contrast in this concept mate This has navigated right into my heart.', 2, 14),
('I think I''m crying. It''s that exquisite. Splendid. So sublime.', 2, 14),
('This has navigated right into my heart.', 2, 14),
('Nice use of contrast in this concept mate', 1, 15),
('This is cool work, friend.', 1, 15),
('Really exquisite, friend.', 1, 16),
('Let me take a nap... great anyway. I think I''m crying. It''s that exquisite. Nice use of contrast in this concept mate', 2, 17),
('It''s simple not just excellent!', 1, 18),
('Really exquisite, friend.', 1, 18),
('It''s simple not just excellent! Super sublime shot =)', 1, 19),
('Really exquisite, friend. This has navigated right into my heart. It''s simple not just excellent!', 2, 19),
('Nice use of contrast in this concept mate I think I''m crying. It''s that exquisite. Let me take a nap... great anyway.', 1, 19),
('Let me take a nap... great anyway. Nice use of contrast in this concept mate', 1, 19),
('Splendid. So sublime.', 2, 20),
('Nice use of contrast in this concept mate', 2, 20);
      ALTER TABLE comments ENABLE TRIGGER ALL;
    