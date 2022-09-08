
      INSERT INTO users(email, passwordHash, firstName, lastName, avatar) VALUES
      ('user1@example.com', '5f4dcc3b5aa765d61d8327deb882cf99', 'User1FirstName', 'User1LastName', 'user1Avatar.jpg'),
('user2@example.com', '5f4dcc3b5aa765d62d8327deb882cf99', 'User2FirstName', 'User2LastName', 'user2Avatar.jpg');
      INSERT INTO categories(name) VALUES
      ('Science'),
('Politics'),
('Culture'),
('Sports'),
('Nature'),
('Books');
      ALTER TABLE articles DISABLE TRIGGER ALL;
      INSERT INTO articles(title, userId, announce, fullText) VALUES
      ('7 Facts That Nobody Told You About Blog.', '1', 'This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. So one of the things I did was explain [in the interview] why I was asking. What could go wrong?', 'You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. What could go wrong? And West Virginians are angry, right? That is, just because you''re worried about something doesn''t mean it''s going to happen. We still need more time. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. So one of the things I did was explain [in the interview] why I was asking. Rona continues his description: Descending into the ocean is sheer excitement.'),
('20 Wonderful Blog. Number 16 is Absolutely Stunning', '2', 'This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Rona continues his description: Descending into the ocean is sheer excitement. What could go wrong?', 'Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. We still need more time. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend.'),
('7 Facts That Nobody Told You About Blog.', '2', 'So one of the things I did was explain [in the interview] why I was asking. And West Virginians are angry, right? Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.', 'That is, just because you''re worried about something doesn''t mean it''s going to happen. So one of the things I did was explain [in the interview] why I was asking. We still need more time. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. Rona continues his description: Descending into the ocean is sheer excitement.'),
('7 Facts That Nobody Told You About Blog.', '2', 'Rona continues his description: Descending into the ocean is sheer excitement. We still need more time. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.', 'What could go wrong? So one of the things I did was explain [in the interview] why I was asking. That is, just because you''re worried about something doesn''t mean it''s going to happen. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.'),
('10 Useful Tips From Experts In Blog.', '2', 'We still need more time. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. And West Virginians are angry, right?', 'You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. So one of the things I did was explain [in the interview] why I was asking. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. We still need more time. What could go wrong?'),
('7 Facts That Nobody Told You About Blog.', '1', 'Rona continues his description: Descending into the ocean is sheer excitement. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. We still need more time.', 'Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. Rona continues his description: Descending into the ocean is sheer excitement. That is, just because you''re worried about something doesn''t mean it''s going to happen. So one of the things I did was explain [in the interview] why I was asking. What could go wrong? We still need more time. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. And West Virginians are angry, right? Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old.'),
('All You Need To Know About Blog.', '2', 'Rona continues his description: Descending into the ocean is sheer excitement. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. So one of the things I did was explain [in the interview] why I was asking.', 'That is, just because you''re worried about something doesn''t mean it''s going to happen. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. What could go wrong? We still need more time. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. And West Virginians are angry, right? Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend. Rona continues his description: Descending into the ocean is sheer excitement. So one of the things I did was explain [in the interview] why I was asking. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals.'),
('Here''s What No One Tells You About Blog.', '2', 'And West Virginians are angry, right? This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. So one of the things I did was explain [in the interview] why I was asking.', 'What could go wrong? Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. We still need more time. And West Virginians are angry, right? So one of the things I did was explain [in the interview] why I was asking.'),
('10 Useful Tips From Experts In Blog.', '2', 'You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. We still need more time. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals.', 'And West Virginians are angry, right? You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. We still need more time. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals. Originally from Hidalgo, Mexico, Greisa moved to Dallas, Texas, with her family when she was 7 years old. Anyway, moral of the story: Don''t ask Andrew Garfield about his famous girlfriend.'),
('All You Need To Know About Blog.', '1', 'So one of the things I did was explain [in the interview] why I was asking. Rona continues his description: Descending into the ocean is sheer excitement. This isn''t been a samizdat revolution, sparked by epistles from dissident intellectuals.', 'That is, just because you''re worried about something doesn''t mean it''s going to happen. You know you have a problem when you light up a cigarette while you already have one lit in the ashtray. Rona continues his description: Descending into the ocean is sheer excitement. So one of the things I did was explain [in the interview] why I was asking. We still need more time.');
      ALTER TABLE articles ENABLE TRIGGER ALL;
      ALTER TABLE articles_categories DISABLE TRIGGER ALL;
      INSERT INTO articles_categories(articleId, categoryId) VALUES
      (1, 4),
(2, 4),
(3, 5),
(4, 3),
(5, 4),
(6, 5),
(7, 2),
(8, 6),
(9, 4),
(10, 2);
      ALTER TABLE articles_categories ENABLE TRIGGER ALL;
      ALTER TABLE comments DISABLE TRIGGER ALL;
      INSERT INTO COMMENTS(text, userId, articleId) VALUES
      ('This is cool work, friend. Splendid. So sublime.', 2, 1),
('Looks sublime and excellent. This has navigated right into my heart.', 1, 1),
('Splendid. So sublime. It''s simple not just excellent!', 2, 1),
('Super sublime shot =)', 1, 1),
('Really exquisite, friend. Nice use of contrast in this concept mate Let me take a nap... great anyway.', 2, 2),
('Looks sublime and excellent. Let me take a nap... great anyway. This has navigated right into my heart.', 2, 2),
('Nice use of contrast in this concept mate Splendid. So sublime. Let me take a nap... great anyway.', 2, 2),
('Really exquisite, friend. Nice use of contrast in this concept mate', 1, 3),
('Nice use of contrast in this concept mate This is cool work, friend. It''s simple not just excellent!', 1, 3),
('Splendid. So sublime. This has navigated right into my heart. Looks sublime and excellent.', 1, 3),
('Let me take a nap... great anyway.', 2, 3),
('This has navigated right into my heart. Looks sublime and excellent.', 1, 3),
('Really exquisite, friend.', 1, 4),
('Looks sublime and excellent. This has navigated right into my heart. It''s simple not just excellent!', 1, 5),
('Really exquisite, friend. Let me take a nap... great anyway. I think I''m crying. It''s that exquisite.', 1, 5),
('This is cool work, friend. Super sublime shot =)', 1, 6),
('This has navigated right into my heart.', 2, 6),
('It''s simple not just excellent!', 2, 7),
('Looks sublime and excellent. Super sublime shot =) Splendid. So sublime.', 1, 7),
('Splendid. So sublime. It''s simple not just excellent! Let me take a nap... great anyway.', 2, 7),
('I think I''m crying. It''s that exquisite. Let me take a nap... great anyway. Nice use of contrast in this concept mate', 2, 8),
('Let me take a nap... great anyway. Splendid. So sublime.', 1, 9),
('I think I''m crying. It''s that exquisite. Nice use of contrast in this concept mate This has navigated right into my heart.', 2, 9),
('Looks sublime and excellent. Super sublime shot =) This is cool work, friend.', 2, 9),
('This has navigated right into my heart. Really exquisite, friend.', 2, 9),
('Really exquisite, friend. Splendid. So sublime. Super sublime shot =)', 1, 9),
('I think I''m crying. It''s that exquisite.', 2, 10);
      ALTER TABLE comments ENABLE TRIGGER ALL;
    